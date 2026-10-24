const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');
const loadEnv = require('./load-env');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// Load .env.pre into env, overriding any inherited process.env values
const vars = loadEnv('.env.pre', { override: true });
const env = { ...process.env, ...vars };

for (const key of ['SITE_URL', 'USER', 'PASSWORD', 'HTPASSWD_PATH']) {
  if (!env[key]) throw new Error(`Missing required variable in .env.pre: ${key}`);
}

// Run regular build with .env.pre vars
console.log('\n[build-pre] running build...');
const result = spawnSync(process.execPath, [path.join(__dirname, 'build.js')], {
  env,
  stdio: 'inherit',
});
if (result.status !== 0) process.exit(result.status);

// Append Basic Auth to root .htaccess
const authBlock = [
  '',
  '# Basic Auth — preview access',
  '<Files ".htpasswd">',
  '  Require all denied',
  '</Files>',
  'AuthType Basic',
  'AuthName "Preview"',
  `AuthUserFile ${env.HTPASSWD_PATH}`,
  'Require valid-user',
  '',
].join('\n');
fs.appendFileSync(path.join(DIST, '.htaccess'), authBlock);
console.log('[build-pre] appended auth to .htaccess');

// Generate .htpasswd (SHA1 format, no external deps)
const hash = '{SHA}' + crypto.createHash('sha1').update(env.PASSWORD).digest('base64');
fs.writeFileSync(path.join(DIST, '.htpasswd'), `${env.USER}:${hash}\n`);
console.log('[build-pre] generated .htpasswd');

// Block search engines
fs.writeFileSync(path.join(DIST, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log('[build-pre] robots.txt set to Disallow: /');

console.log('\n[build-pre] done\n');
