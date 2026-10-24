const http = require('http');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const CleanCSS = require('clean-css');
const terser = require('terser');
const { applyTranslations, pagePathFromFile } = require('./translate');

const ROOT = path.join(__dirname, '..');

require('./load-env')('.env.dev');

const PORT = process.env.DEV_PORT || 3000;
const ENV_VARS = {};

function substituteEnv(src) {
  return src.replace(/%%(\w+)%%/g, (_match, key) => {
    if (!(key in ENV_VARS)) throw new Error(`Unknown env token: %%${key}%%`);
    return ENV_VARS[key];
  });
}

const PAGES = path.join(ROOT, 'pages');
const I18N_SRC = path.join(ROOT, 'js', 'i18n.js');
const I18N_OUT = path.join(ROOT, 'js', 'i18n.min.js');

function discoverCSS() {
  return fs.readdirSync(path.join(ROOT, 'css'))
    .filter(f => f.endsWith('.css') && !f.endsWith('.min.css'))
    .map(f => {
      const label = f.slice(0, -4);
      return [`css/${f}`, `css/${label}.min.css`, label];
    });
}

function discoverJS() {
  const jsDir = path.join(ROOT, 'js');
  if (!fs.existsSync(jsDir)) return [];
  return fs.readdirSync(jsDir)
    .filter(f => f.endsWith('.js') && !f.endsWith('.min.js') && f !== 'i18n.js')
    .map(f => {
      const label = f.slice(0, -3);
      return [`js/${f}`, `js/${label}.min.js`, label];
    });
}

function discoverLocales() {
  return fs.readdirSync(path.join(ROOT, 'locales'))
    .filter(f => f.endsWith('.json') && !f.endsWith('.min.json'))
    .map(f => f.slice(0, -5));
}

const CSS_FILES = discoverCSS();
const JS_FILES  = discoverJS();
const LOCALES   = discoverLocales();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
};

function minifyCSS(src_path, out_path, label) {
  try {
    const src = fs.readFileSync(src_path, 'utf8');
    const result = new CleanCSS({ level: 2 }).minify(src);
    if (result.errors.length) {
      console.error(`[${label}] errors:`, result.errors);
      return;
    }
    fs.writeFileSync(out_path, result.styles);
    const saved = ((1 - result.stats.minifiedSize / result.stats.originalSize) * 100).toFixed(1);
    console.log(`[${label}] minified → ${result.stats.minifiedSize}B (saved ${saved}%)`);
  } catch (err) {
    console.error(`[${label}] failed to minify:`, err.message);
  }
}

async function minifyJS(src_path, out_path, label) {
  try {
    const src = substituteEnv(fs.readFileSync(src_path, 'utf8'));
    const result = await terser.minify(src);
    fs.writeFileSync(out_path, result.code);
    const saved = ((1 - result.code.length / src.length) * 100).toFixed(1);
    console.log(`[${label}] minified → ${result.code.length}B (saved ${saved}%)`);
  } catch (err) {
    console.error(`[${label}] failed to minify:`, err.message);
  }
}

function minifyJSON(lang) {
  const src = path.join(ROOT, 'locales', `${lang}.json`);
  const out = path.join(ROOT, 'locales', `${lang}.min.json`);
  try {
    const data = fs.readFileSync(src, 'utf8');
    const minified = JSON.stringify(JSON.parse(data));
    fs.writeFileSync(out, minified);
    const saved = ((1 - minified.length / data.length) * 100).toFixed(1);
    console.log(`[json:${lang}] minified → ${minified.length}B (saved ${saved}%)`);
  } catch (err) {
    console.error(`[json:${lang}] failed to minify:`, err.message);
  }
}

// Minify on startup
CSS_FILES.forEach(([src, out, label]) => minifyCSS(path.join(ROOT, src), path.join(ROOT, out), label));
JS_FILES.forEach(([src, out, label]) => minifyJS(path.join(ROOT, src), path.join(ROOT, out), label));
if (fs.existsSync(I18N_SRC)) minifyJS(I18N_SRC, I18N_OUT, 'i18n');
LOCALES.forEach(minifyJSON);

// Load locale translations (reloaded on change)
function loadTranslations(lang) {
  try {
    return JSON.parse(fs.readFileSync(path.join(ROOT, 'locales', `${lang}.json`), 'utf8'));
  } catch (err) {
    console.error(`[json:${lang}] failed to load:`, err.message);
    return null;
  }
}
const translations = {};
LOCALES.forEach(lang => { translations[lang] = loadTranslations(lang); });

// Watch source files
CSS_FILES.forEach(([src, out, label]) => {
  chokidar.watch(path.join(ROOT, src), { ignoreInitial: true }).on('change', () => {
    console.log(`[${label}] changed, minifying...`);
    minifyCSS(path.join(ROOT, src), path.join(ROOT, out), label);
  });
});

JS_FILES.forEach(([src, out, label]) => {
  chokidar.watch(path.join(ROOT, src), { ignoreInitial: true }).on('change', () => {
    console.log(`[${label}] changed, minifying...`);
    minifyJS(path.join(ROOT, src), path.join(ROOT, out), label);
  });
});

if (fs.existsSync(I18N_SRC)) {
  chokidar.watch(I18N_SRC, { ignoreInitial: true }).on('change', () => {
    console.log('[i18n] changed, minifying...');
    minifyJS(I18N_SRC, I18N_OUT, 'i18n');
  });
}

LOCALES.forEach(lang => {
  const src = path.join(ROOT, 'locales', `${lang}.json`);
  chokidar.watch(src, { ignoreInitial: true }).on('change', () => {
    console.log(`[json:${lang}] changed, minifying...`);
    minifyJSON(lang);
    translations[lang] = loadTranslations(lang);
  });
});

function resolveIncludes(content, baseDir) {
  return content.replace(/<!--#include "([^"]+)"-->/g, (_, includePath) => {
    const fullPath = includePath.startsWith('/')
      ? path.join(ROOT, includePath)
      : path.join(baseDir, includePath);
    try {
      const partial = fs.readFileSync(fullPath, 'utf8');
      return resolveIncludes(partial, path.dirname(fullPath));
    } catch (err) {
      console.error(`[html] cannot include "${includePath}": ${err.message}`);
      return '';
    }
  });
}

// Static file server
http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Detect language from URL prefix; default to 'en'
  const langMatch = urlPath.match(/^\/(es|fr|ca)(\/|$)/);
  const lang = langMatch ? langMatch[1] : 'en';
  urlPath = langMatch ? urlPath.replace(langMatch[0], '/') : urlPath;

  if (urlPath === '/') urlPath = '/index.html';
  if (!path.extname(urlPath)) {
    const htmlPath = path.join(PAGES, urlPath + '.html');
    urlPath += fs.existsSync(htmlPath) ? '.html' : '/index.html';
  }

  const ext = path.extname(urlPath).toLowerCase();
  const filePath = ext === '.html'
    ? path.join(PAGES, urlPath)
    : path.join(ROOT, urlPath);

  // Prevent path traversal outside ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const mimeType = MIME[ext] || 'application/octet-stream';

  if (ext === '.html') {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        const notFoundPath = path.join(PAGES, '404.html');
        fs.readFile(notFoundPath, 'utf8', (err2, notFoundData) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
            return;
          }
          const assembled = resolveIncludes(notFoundData, path.dirname(notFoundPath));
          const pagePath = pagePathFromFile('404.html');
          res.writeHead(404, { 'Content-Type': mimeType });
          res.end(applyTranslations(assembled, translations[lang], lang, pagePath));
        });
        return;
      }
      const assembled = resolveIncludes(data, path.dirname(filePath));
      const pageFile = path.relative(PAGES, filePath).replace(/\\/g, '/');
      const pagePath = pagePathFromFile(pageFile);
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(applyTranslations(assembled, translations[lang], lang, pagePath));
    });
  } else {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
        return;
      }
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);
    });
  }
}).listen(PORT, () => {
  console.log(`Server → http://localhost:${PORT}`);
  console.log(`Watching ${CSS_FILES.length} CSS, ${JS_FILES.length} JS, ${LOCALES.length} locale files...`);
});
