const fs = require('fs');
const path = require('path');
const CleanCSS = require('clean-css');
const terser = require('terser');
const { minify: minifyHTML } = require('html-minifier-terser');
const { pagePathFromFile, applyTranslations } = require('./translate');

const ROOT = path.join(__dirname, '..');

require('./load-env')('.env.pro');

const PAGES = path.join(ROOT, 'pages');
const DIST = path.join(ROOT, 'dist');
const DEFAULT_LOCALE = 'en';
const LOCALES_DIR = path.join(ROOT, 'locales');
const LOCALES = fs.readdirSync(LOCALES_DIR)
  .filter(f => /^[a-z]{2}\.json$/.test(f))
  .map(f => f.replace('.json', ''))
  .sort((a, b) => a === DEFAULT_LOCALE ? -1 : b === DEFAULT_LOCALE ? 1 : a.localeCompare(b));
if (!LOCALES.includes(DEFAULT_LOCALE)) throw new Error(`Default locale '${DEFAULT_LOCALE}' not found in locales/`);
if (!process.env.SITE_URL) throw new Error('SITE_URL environment variable is required');
const SITE_URL = process.env.SITE_URL;
const DOCS_DIR = path.join(ROOT, 'assets', 'docs');
const docAssets = fs.existsSync(DOCS_DIR)
  ? fs.readdirSync(DOCS_DIR).map(f => `assets/docs/${f}`)
  : [];

const ALWAYS_INCLUDE_ASSETS = [
  ...LOCALES.map(l => `assets/og/${l}.png`),
  ...docAssets,
];

const ENV_VARS = { SITE_URL };

function substituteEnv(src) {
  return src.replace(/%%(\w+)%%/g, (_match, key) => {
    if (!(key in ENV_VARS)) throw new Error(`Unknown env token: %%${key}%%`);
    return ENV_VARS[key];
  });
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function resolveIncludes(content, baseDir) {
  return content.replace(/<!--#include "([^"]+)"-->/g, (_, includePath) => {
    const fullPath = includePath.startsWith('/')
      ? path.join(ROOT, includePath)
      : path.join(baseDir, includePath);
    try {
      const partial = fs.readFileSync(fullPath, 'utf8');
      return resolveIncludes(partial, path.dirname(fullPath));
    } catch (err) {
      console.error(`  [html] cannot include "${includePath}": ${err.message}`);
      return '';
    }
  });
}

function scanPages(dir, base = '') {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      files.push(...scanPages(path.join(dir, entry.name), rel));
    } else if (entry.name.endsWith('.html')) {
      files.push(rel);
    }
  }
  return files;
}

// Scan assembled HTML pages for local CSS, JS, and asset references,
// then scan referenced CSS source files for url() asset references.
function collectDeps(assembledPages) {
  const cssRefs = new Set(); // root-relative paths like 'css/style.min.css'
  const jsRefs = new Set(); // root-relative paths like 'js/main.min.js'
  const assetRefs = new Set(); // root-relative paths like 'assets/logos/logo.svg'

  for (const html of assembledPages) {
    // CSS <link href="/...css">
    for (const m of html.matchAll(/href="\/([^"]+\.css)"/g))
      cssRefs.add(m[1]);

    // JS <script src="/...js">
    for (const m of html.matchAll(/src="\/([^"]+\.js)"/g))
      jsRefs.add(m[1]);

    // Assets referenced directly in HTML (src or href, root-relative)
    for (const m of html.matchAll(/(?:src|href)="\/([^"?#]+\.(svg|png|webp|jpg|jpeg|ico|gif))"/g))
      assetRefs.add(m[1]);

    // Assets referenced in inline style attributes via url()
    for (const m of html.matchAll(/style="[^"]*url\(['"]?(\/[^'")\s]+)['"]?\)[^"]*"/g))
      assetRefs.add(m[1].replace(/^\//, ''));
  }

  // Assets referenced via url() in CSS source files
  for (const cssMinRef of cssRefs) {
    const cssSrc = cssMinRef.replace('.min.css', '.css');
    const cssAbs = path.join(ROOT, cssSrc);
    const cssDir = path.dirname(cssAbs);
    try {
      const css = fs.readFileSync(cssAbs, 'utf8');
      for (const m of css.matchAll(/url\(['"]?([^'")\s]+)['"]?\)/g)) {
        const ref = m[1];
        if (ref.startsWith('data:') || ref.startsWith('http')) continue;
        const abs = path.resolve(cssDir, ref);
        assetRefs.add(path.relative(ROOT, abs).replace(/\\/g, '/'));
      }
    } catch (err) {
      console.error(`  [css] cannot scan "${cssSrc}" for assets: ${err.message}`);
    }
  }

  return { cssRefs, jsRefs, assetRefs };
}


function urlFor(lang, pagePath) {
  return lang === DEFAULT_LOCALE
    ? `${SITE_URL}${pagePath === '/' ? '/' : pagePath}`
    : `${SITE_URL}/${lang}${pagePath === '/' ? '/' : pagePath}`;
}

function injectOGMeta(html, lang, pagePath) {
  const tags = [
    `  <meta property="og:type" content="website">`,
    `  <meta property="og:site_name" content="Julián Marrades">`,
    `  <meta property="og:url" content="${urlFor(lang, pagePath)}">`,
    `  <meta property="og:image" content="${SITE_URL}/assets/og/${lang}.png">`,
  ].join('\n');
  return html.replace('</head>', `${tags}\n</head>`);
}

function injectHreflang(html, pagePath) {
  const tags = [...LOCALES, 'x-default']
    .map(lang => `  <link rel="alternate" hreflang="${lang}" href="${urlFor(lang === 'x-default' ? DEFAULT_LOCALE : lang, pagePath)}">`)
    .join('\n');

  return html.replace('</head>', `${tags}\n</head>`);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getDirStats(dir, stats = {}) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const filePath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getDirStats(filePath, stats);
    } else {
      const ext = path.extname(entry.name).slice(1).toLowerCase() || 'other';
      const size = fs.statSync(filePath).size;
      stats[ext] = stats[ext] || { size: 0, count: 0 };
      stats[ext].size += size;
      stats[ext].count++;
    }
  }
  return stats;
}

// ── Build ─────────────────────────────────────────────────────────────────────

async function build() {
  const t0 = Date.now();
  console.log('\n[build] starting...\n');

  // Clean dist
  if (fs.existsSync(DIST)) fs.rmSync(DIST, { recursive: true });
  ensureDir(DIST);

  // Load locale translations upfront
  const translations = {};
  for (const lang of LOCALES) {
    translations[lang] = JSON.parse(
      fs.readFileSync(path.join(ROOT, 'locales', `${lang}.json`), 'utf8')
    );
  }

  // 1. HTML — assemble partials, apply per-language translations, write all variants
  const pageFiles = scanPages(PAGES);
  const enAssembled = []; // post-translation, post-strip English pages for dep scanning

  for (const file of pageFiles) {
    const srcPath = path.join(PAGES, file);
    const src = fs.readFileSync(srcPath, 'utf8');
    const assembled = resolveIncludes(src, path.dirname(srcPath));
    const pagePath = pagePathFromFile(file);

    for (const lang of LOCALES) {
      const translated = injectOGMeta(injectHreflang(applyTranslations(assembled, translations[lang], lang, pagePath), pagePath), lang, pagePath);
      const minified = await minifyHTML(translated, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
      });
      const outPath = lang === DEFAULT_LOCALE
        ? path.join(DIST, file)
        : path.join(DIST, lang, file);
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, minified);
      console.log(`  [html] ${lang === DEFAULT_LOCALE ? '' : lang + '/'}${file}`);
      if (lang === DEFAULT_LOCALE) enAssembled.push(translated);
    }
  }

  // 2. Scan deps from English assembled pages (same assets/scripts across all languages)
  const { cssRefs, jsRefs, assetRefs } = collectDeps(enAssembled);
  for (const ref of ALWAYS_INCLUDE_ASSETS) assetRefs.add(ref);

  // 3. CSS — minify only referenced stylesheets
  for (const cssMinRef of cssRefs) {
    const srcPath = path.join(ROOT, cssMinRef.replace('.min.css', '.css'));
    const outPath = path.join(DIST, cssMinRef);
    try {
      const src = fs.readFileSync(srcPath, 'utf8');
      const result = new CleanCSS({ level: 2 }).minify(src);
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, result.styles);
      const saved = ((1 - result.stats.minifiedSize / result.stats.originalSize) * 100).toFixed(1);
      console.log(`  [css] ${path.basename(srcPath)} → ${path.basename(outPath)} (saved ${saved}%)`);
    } catch (err) {
      console.error(`  [css] failed: ${err.message}`);
    }
  }

  // 4. JS — minify only referenced scripts
  for (const jsMinRef of jsRefs) {
    const srcPath = path.join(ROOT, jsMinRef.replace('.min.js', '.js'));
    const outPath = path.join(DIST, jsMinRef);
    try {
      const src = substituteEnv(fs.readFileSync(srcPath, 'utf8'));
      const result = await terser.minify(src);
      ensureDir(path.dirname(outPath));
      fs.writeFileSync(outPath, result.code);
      const saved = ((1 - result.code.length / src.length) * 100).toFixed(1);
      console.log(`  [js]  ${path.basename(srcPath)} → ${path.basename(outPath)} (saved ${saved}%)`);
    } catch (err) {
      console.error(`  [js]  failed: ${err.message}`);
    }
  }

  // 5. Assets — copy only referenced files
  for (const ref of assetRefs) {
    const src = path.join(ROOT, ref);
    const dest = path.join(DIST, ref);
    try {
      ensureDir(path.dirname(dest));
      fs.copyFileSync(src, dest);
      console.log(`  [asset] ${ref}`);
    } catch (err) {
      console.error(`  [asset] missing: ${ref}`);
    }
  }

  // 6. .htaccess — generate root and per-language files
  const host = new URL(SITE_URL).host;
  const httpsRedirect = SITE_URL.startsWith('https://')
    ? `# Force HTTPS\nRewriteCond %{SERVER_PORT} !=443\nRewriteRule ^(.*)$ https://${host}/$1 [R=301,L]\n\n`
    : '';
  // Detect root-level pages that conflict with a same-name subdirectory (e.g. housing.html + housing/)
  const conflictRules = pageFiles
    .filter(file => {
      if (path.dirname(file) !== '.') return false;
      const name = path.basename(file, '.html');
      const dirPath = path.join(DIST, name);
      return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
    })
    .map(file => `RewriteRule ^${path.basename(file, '.html')}/?$ /${path.basename(file, '.html')}.html [L]`)
    .join('\n');
  const conflictSection = conflictRules ? `# Pages where a same-name directory also exists\n${conflictRules}\n\n` : '';
  const rootHtaccess = `Options -Indexes\n\nRewriteEngine On\n\n${httpsRedirect}# Language prefix routing — serve per-language static files\nRewriteRule ^(es|fr|ca|ru)/?$ /$1/index.html [L]\nRewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}.html -f\nRewriteRule ^(es|fr|ca|ru)/([^.]+)$ /$1/$2.html [L]\n\n${conflictSection}# Remove .html extension from URLs\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteCond %{REQUEST_FILENAME}\\.html -f\nRewriteRule ^([^\\.]+)$ $1.html [NC,L]\n\n# Custom error pages\nErrorDocument 404 /404.html\nErrorDocument 500 /status.html?type=500\n`;
  fs.writeFileSync(path.join(DIST, '.htaccess'), rootHtaccess);
  console.log('  [htaccess] .htaccess');
  for (const lang of LOCALES.filter(l => l !== DEFAULT_LOCALE)) {
    fs.writeFileSync(
      path.join(DIST, lang, '.htaccess'),
      `ErrorDocument 404 /${lang}/404.html\nErrorDocument 500 /${lang}/status.html?type=500\n`
    );
    console.log(`  [htaccess] ${lang}/.htaccess`);
  }
  // For pages that share a name with a subdirectory, write a DirectoryIndex into that
  // subdirectory so Apache serves the .html file instead of returning 403 (-Indexes).
  for (const file of pageFiles) {
    if (path.dirname(file) !== '.') continue;
    const name = path.basename(file, '.html');
    const dirPath = path.join(DIST, name);
    if (fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory()) {
      fs.writeFileSync(path.join(dirPath, '.htaccess'), `DirectoryIndex /${name}.html\n`);
      console.log(`  [htaccess] ${name}/.htaccess`);
    }
  }

  // 7. Sitemap + robots.txt
  const SITEMAP_SKIP = new Set(['404.html', 'status.html']);
  const today = new Date().toISOString().split('T')[0];
  const sitemapEntries = pageFiles
    .filter(f => !SITEMAP_SKIP.has(path.basename(f)))
    .flatMap(file => {
      const pagePath = pagePathFromFile(file);
      const alternates = [...LOCALES, 'x-default']
        .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${urlFor(l === 'x-default' ? DEFAULT_LOCALE : l, pagePath)}"/>`)
        .join('\n');
      return LOCALES.map(lang => `  <url>\n    <loc>${urlFor(lang, pagePath)}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`);
    })
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);
  console.log('  [sitemap] sitemap.xml');

  // 8. CNAME — custom domain for GitHub Pages
  fs.writeFileSync(path.join(DIST, 'CNAME'), `${host}\n`);
  console.log('  [cname] CNAME');

  fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log('  [robots] robots.txt');

  const stats = getDirStats(DIST);
  const totalBytes = Object.values(stats).reduce((s, v) => s + v.size, 0);
  const fmt = bytes => bytes >= 1024 * 1024
    ? (bytes / 1024 / 1024).toFixed(2) + ' MB'
    : (bytes / 1024).toFixed(1) + ' KB';
  const TYPE_ORDER = ['html', 'css', 'js', 'json', 'svg', 'png', 'webp', 'jpg', 'jpeg', 'woff', 'woff2'];
  const ordered = [
    ...TYPE_ORDER.filter(t => stats[t]),
    ...Object.keys(stats).filter(t => !TYPE_ORDER.includes(t)).sort(),
  ];
  console.log('\n[build] dist/');
  for (const ext of ordered) {
    const { size, count } = stats[ext];
    console.log(`  .${ext.padEnd(6)} ${fmt(size).padStart(9)}  (${count} file${count === 1 ? '' : 's'})`);
  }
  console.log(`  ${'total'.padEnd(7)} ${fmt(totalBytes).padStart(9)}`);
  console.log(`\n[build] done in ${Date.now() - t0}ms\n`);
}

build().catch(err => {
  console.error('\n[build] failed:', err);
  process.exit(1);
});
