// Shared translation helpers used by both build.js and server.js.

// Resolve a dotted key path against a translations object.
function get(obj, dotPath) {
  if (!dotPath) return undefined;
  return dotPath.split('.').reduce((o, k) => o?.[k], obj);
}

// Derive the page's URL path from its file path.
// 'index.html' → '/', 'about.html' → '/about', 'housing/student.html' → '/housing/student'
function pagePathFromFile(file) {
  const withoutExt = file.replace(/\.html$/, '').replace(/\\/g, '/');
  if (withoutExt === 'index') return '/';
  if (withoutExt.endsWith('/index')) return '/' + withoutExt.slice(0, -'/index'.length);
  return '/' + withoutExt;
}

// Render a single list item by substituting data-i18n-field* attributes from the item object.
// Handles nested data-i18n-list (e.g. buttons inside a project).
function renderItem(templateHtml, item) {
  let html = templateHtml;

  // 1. Nested data-i18n-list — resolved using a property of the current item.
  //    Non-greedy is safe here because leaf items (e.g. buttons) have no further <template> nesting.
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*\bdata-i18n-list="([^"]+)"[^>]*)>\s*<template data-i18n-list-item>([\s\S]*?)<\/template>\s*<\/\1>/g,
    (match, tag, attrs, field, tmpl) => {
      const subItems = item[field];
      if (!Array.isArray(subItems)) return '';
      const rendered = subItems.map(subItem => renderItem(tmpl, subItem)).join('\n');
      const cleanAttrs = attrs.replace(/\s*\bdata-i18n-list="[^"]*"/, '');
      return `<${tag}${cleanAttrs}>${rendered}</${tag}>`;
    }
  );

  // 2. data-i18n-field — replace innerHTML with item[field].
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*\bdata-i18n-field="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, field, _inner) => {
      const val = item[field];
      return val != null ? `<${tag}${attrs}>${val}</${tag}>` : match;
    }
  );

  // 3. data-i18n-field-href — set href attribute from item[field].
  html = html.replace(
    /<[a-zA-Z][a-zA-Z0-9]*\b[^>]*\bdata-i18n-field-href="([^"]+)"[^>]*>/g,
    (fullTag, field) => {
      const val = item[field];
      if (val == null) return fullTag;
      return /(?<![a-z-])href="[^"]*"/.test(fullTag)
        ? fullTag.replace(/(?<![a-z-])href="[^"]*"/, `href="${val}"`)
        : fullTag.replace(/>$/, ` href="${val}">`);
    }
  );

  // 4. Strip data-i18n-field* attributes.
  html = html.replace(/\s+data-i18n-field(?:-[a-z]+)*="[^"]*"/g, '');

  return html.trim();
}

// Apply translations to an assembled HTML string for a given language.
// Handles data-i18n (innerHTML), meta[data-i18n] (content), data-i18n-href (href),
// data-i18n-placeholder (placeholder), data-i18n-list (array templates),
// html[lang], and language selector links.
// Strips all data-i18n* attributes from the output.
function applyTranslations(html, translations, lang, pagePath) {
  const langPrefix = lang === 'en' ? '' : '/' + lang;

  // 0. data-i18n-list — expand array templates.
  //    Outer container content is matched non-greedily (safe: no nested same-tag).
  //    Template content is then extracted greedily (first <template> to last </template>)
  //    so that inner nested <template> elements are captured correctly.
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*\bdata-i18n-list="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, key, content) => {
      const tmplMatch = content.match(/<template data-i18n-list-item>([\s\S]*)<\/template>/);
      if (!tmplMatch) return match;
      const items = get(translations, key);
      if (!Array.isArray(items)) return match;
      const rendered = items.map(item => renderItem(tmplMatch[1], item)).join('\n');
      const cleanAttrs = attrs.replace(/\s*\bdata-i18n-list="[^"]*"/, '');
      return `<${tag}${cleanAttrs}>\n${rendered}\n</${tag}>`;
    }
  );

  // 1. Regular elements with data-i18n — replace innerHTML
  //    Tag-name backreference prevents greedy cross-element matches.
  html = html.replace(
    /<([a-zA-Z][a-zA-Z0-9]*)\b([^>]*\bdata-i18n="([^"]+)"[^>]*)>([\s\S]*?)<\/\1>/g,
    (match, tag, attrs, key, _inner) => {
      if (!key) return match;
      const val = get(translations, key);
      return val != null ? `<${tag}${attrs}>${val}</${tag}>` : match;
    }
  );

  // 2. meta[data-i18n] — update content attribute
  html = html.replace(
    /<meta\b([^>]*\bdata-i18n="([^"]+)"[^>]*)>/g,
    (match, attrs, key) => {
      const val = get(translations, key);
      return val != null
        ? `<meta${attrs.replace(/\bcontent="[^"]*"/, `content="${val}"`)}>`
        : match;
    }
  );

  // 3. data-i18n-href — update href with language prefix (or add href if absent)
  html = html.replace(
    /<[a-zA-Z][a-zA-Z0-9]*\b[^>]*\bdata-i18n-href="([^"]+)"[^>]*>/g,
    (fullTag, p) => {
      const newHref = `${langPrefix}${p}`;
      return /(?<!-)href="/.test(fullTag)
        ? fullTag.replace(/(?<!-)href="[^"]*"/, `href="${newHref}"`)
        : fullTag.replace(/\bdata-i18n-href="/, `href="${newHref}" data-i18n-href="`);
    }
  );

  // 4. data-i18n-placeholder — update placeholder attribute
  html = html.replace(
    /<[a-zA-Z][a-zA-Z0-9]*\b[^>]*\bdata-i18n-placeholder="([^"]+)"[^>]*>/g,
    (fullTag, key) => {
      const val = get(translations, key);
      if (val == null) return fullTag;
      return /(?<![a-z-])placeholder="[^"]*"/.test(fullTag)
        ? fullTag.replace(/(?<![a-z-])placeholder="[^"]*"/, `placeholder="${val}"`)
        : fullTag.replace(/>$/, ` placeholder="${val}">`);
    }
  );

  // 5. Update <html lang="...">
  html = html.replace(/(<html\b[^>]*?\blang=")[a-z-]+(")/,`$1${lang}$2`);

  // 6. Language selector — bake in page-specific hrefs and aria-current
  html = html.replace(
    /<a\b([^>]*)\bhref="\/(es\/|fr\/|ca\/|)"([^>]*)>(EN|ES|FR|CAT)<\/a>/g,
    (match, before, rawLang, after, label) => {
      const code = rawLang.replace(/\//g, '') || 'en';
      const href = pagePath === '/'
        ? (code === 'en' ? '/' : `/${code}/`)
        : `${code === 'en' ? '' : '/' + code}${pagePath}`;
      return `<a${before}href="${href}"${after} aria-current="${code === lang}">${label}</a>`;
    }
  );

  // 7. Strip all remaining data-i18n* attributes (including multi-segment ones)
  html = html.replace(/\s+data-i18n(?:-[a-z]+)*(?:="[^"]*")?/g, '');

  // 8. Strip any unprocessed <template> elements
  html = html.replace(/<template\b[^>]*>[\s\S]*?<\/template>/g, '');

  return html;
}

module.exports = { get, pagePathFromFile, applyTranslations };
