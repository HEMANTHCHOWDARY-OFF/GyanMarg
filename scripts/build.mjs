import fs from 'node:fs';
import { execSync } from 'node:child_process';

// 1. Clean dist directory completely to ensure no stale cached files (_redirects, old assets)
if (fs.existsSync('dist')) {
  fs.rmSync('dist', { recursive: true, force: true });
}

// 2. Run vite build
execSync('npx vite build', { stdio: 'inherit' });

// 3. Create 200.html for robust SPA fallback support on Cloudflare
if (fs.existsSync('dist/index.html')) {
  fs.copyFileSync('dist/index.html', 'dist/200.html');
}

// 4. Ensure any stray _redirects is removed
if (fs.existsSync('dist/_redirects')) {
  fs.rmSync('dist/_redirects', { force: true });
}
