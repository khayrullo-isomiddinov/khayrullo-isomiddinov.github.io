// Converts and resizes all PNGs in assets/images/ to WebP
// Usage: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const INPUT_DIR = path.join(ROOT, 'assets', 'images');
const OUTPUT_DIR = path.join(ROOT, 'assets', 'images');
const MAX_WIDTH = 1920; // resize down if wider than this
const QUALITY = 85;

const files = fs.readdirSync(INPUT_DIR).filter(f => f.endsWith('.png'));

if (!files.length) {
  console.log('No PNG files found.');
  process.exit(0);
}

Promise.all(files.map(async (file) => {
  const inputPath = path.join(INPUT_DIR, file);
  const outputName = file.replace(/\.png$/, '.webp');
  const outputPath = path.join(OUTPUT_DIR, outputName);

  const info = await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  const inputSize = (fs.statSync(inputPath).size  / 1024).toFixed(0);
  const outputSize = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(`${file} → ${outputName}  ${inputSize}KB → ${outputSize}KB`);
})).then(() => console.log('Done.'));
