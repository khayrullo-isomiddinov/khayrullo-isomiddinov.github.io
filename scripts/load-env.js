const fs = require('fs');
const path = require('path');

module.exports = function loadEnv(filename, { override = false } = {}) {
  const envFile = path.join(__dirname, '..', filename);
  if (!fs.existsSync(envFile)) throw new Error(`${filename} not found`);
  const vars = {};
  fs.readFileSync(envFile, 'utf8').split('\n').forEach(line => {
    const eq = line.indexOf('=');
    if (eq > 0) {
      const key = line.slice(0, eq).trim();
      const val = line.slice(eq + 1).trim().replace(/^["']|["']$/g, '');
      vars[key] = val;
      if (override) process.env[key] = val;
      else process.env[key] ??= val;
    }
  });
  return vars;
};
