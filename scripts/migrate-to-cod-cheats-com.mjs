/**
 * One-shot: cod-cheat.net → https://cod-cheats.com (production).
 * Run: node scripts/migrate-to-cod-cheats-com.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const TEXT = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.jsonc',
  '.css',
  '.md',
  '.txt',
  '_redirects',
]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, files);
    else if (TEXT.has(path.extname(full)) || path.basename(full) === '_headers') files.push(full);
  }
  return files;
}

const FROM = ['cod-cheat.net', 'www.cod-cheat.net', 'https://cod-cheat.net'];
const TO = ['cod-cheats.com', 'www.cod-cheats.com', 'https://cod-cheats.com'];

let changed = 0;
for (const file of walk(root)) {
  if (file.endsWith('migrate-to-cod-cheats-com.mjs')) continue;
  let content = fs.readFileSync(file, 'utf8');
  let next = content;
  for (let i = 0; i < FROM.length; i++) {
    next = next.split(FROM[i]).join(TO[i]);
  }
  if (next !== content) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
  }
}
console.log(`Updated ${changed} files for cod-cheats.com`);