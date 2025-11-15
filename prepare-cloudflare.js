const fs = require('fs');
const path = require('path');

// Prepare worker directory
const root = path.join('.open-next');
const workerDir = path.join(root, 'worker');
if (!fs.existsSync(workerDir)) {
  fs.mkdirSync(workerDir, { recursive: true });
}

// Copy worker.js -> worker/_worker.js if present
const workerSrc = path.join(root, 'worker.js');
if (fs.existsSync(workerSrc)) {
  const workerDest = path.join(workerDir, '_worker.js');
  fs.copyFileSync(workerSrc, workerDest);
  console.log('✓ Copied worker.js to worker/_worker.js');
}

// Copy the rest of the build outputs into the worker directory.
// We copy every top-level entry except the `worker` directory itself to avoid recursion.
try {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  for (const entry of entries) {
    const name = entry.name;
    if (name === 'worker' || name === 'worker.js') continue; // skip

    const srcPath = path.join(root, name);
    const destPath = path.join(workerDir, name);

    // Use fs.cpSync when available to copy files and directories recursively
    if (fs.existsSync(srcPath)) {
      try {
        fs.cpSync(srcPath, destPath, { recursive: true });
        console.log(`✓ Copied ${name} -> .open-next/worker/${name}`);
      } catch (err) {
        // Fallback for older Node versions: copy files or directories manually
        const stat = fs.statSync(srcPath);
        if (stat.isDirectory()) {
          // simple recursive copy
          const copyDir = (src, dst) => {
            if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
            for (const child of fs.readdirSync(src)) {
              const childSrc = path.join(src, child);
              const childDst = path.join(dst, child);
              const childStat = fs.statSync(childSrc);
              if (childStat.isDirectory()) copyDir(childSrc, childDst);
              else fs.copyFileSync(childSrc, childDst);
            }
          };
          copyDir(srcPath, destPath);
          console.log(`✓ Copied dir ${name}`);
        } else {
          // file
          fs.copyFileSync(srcPath, destPath);
          console.log(`✓ Copied file ${name}`);
        }
      }
    }
  }
} catch (e) {
  console.warn('⚠️ Could not copy full .open-next contents:', e.message);
}

console.log('✓ Cloudflare Pages structure prepared');
