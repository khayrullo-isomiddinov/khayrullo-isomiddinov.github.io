const http = require('http');
const fs = require('fs');
const path = require('path');

require('./load-env')('.env.dev');

const PORT = process.env.PREVIEW_PORT || 4000;
const DIST = path.join(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];

  // Trailing slash → index.html
  if (urlPath.endsWith('/')) urlPath += 'index.html';

  // No extension → add .html
  if (!path.extname(urlPath)) urlPath += '.html';

  const filePath = path.join(DIST, urlPath);

  // Prevent path traversal outside DIST
  if (!filePath.startsWith(DIST)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const mimeType = MIME[ext] || 'application/octet-stream';

  const langMatch = req.url.split('?')[0].match(/^\/(es|fr|ca)\b/);
  const lang = langMatch ? langMatch[1] : 'en';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      const notFoundPath = lang === 'en'
        ? path.join(DIST, '404.html')
        : path.join(DIST, lang, '404.html');
      fs.readFile(notFoundPath, (err2, notFound) => {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err2 ? '404 Not Found' : notFound);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Preview → http://localhost:${PORT}`);
});
