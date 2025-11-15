const fs = require('fs');
const path = require('path');

// Create worker directory
const workerDir = path.join('.open-next', 'worker');
if (!fs.existsSync(workerDir)) {
  fs.mkdirSync(workerDir, { recursive: true });
}

// Copy worker.js to worker/_worker.js
const workerSrc = path.join('.open-next', 'worker.js');
const workerDest = path.join(workerDir, '_worker.js');
if (fs.existsSync(workerSrc)) {
  fs.copyFileSync(workerSrc, workerDest);
  console.log('✓ Copied worker.js to worker/_worker.js');
}

// Copy assets if they exist
const assetsSrc = path.join('.open-next', 'assets');
const assetsDest = path.join(workerDir);
if (fs.existsSync(assetsSrc)) {
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log('✓ Copied assets to worker directory');
}

console.log('✓ Cloudflare Pages structure prepared');
