import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const publishDir = join(root, 'netlify-publish');

if (!existsSync(join(distDir, 'index.html'))) {
  console.error('❌ dist/index.html not found. Run: npm run build');
  process.exit(1);
}

if (existsSync(publishDir)) {
  rmSync(publishDir, { recursive: true, force: true });
}

mkdirSync(publishDir, { recursive: true });
cpSync(distDir, publishDir, { recursive: true });

console.log('✅ Netlify folder ready: netlify-publish/');
console.log('   → index.html is at the root of netlify-publish');
console.log('   → Drag the netlify-publish folder to Netlify Deploy manually');
