/**
 * One-shot: cod-cheats.com → https://callofdutycheats.net (production).
 * Run: node scripts/migrate-to-callofdutycheats-net.mjs
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

const PAIRS = [
  ['https://www.cod-cheats.com', 'https://www.callofdutycheats.net'],
  ['https://cod-cheats.com', 'https://callofdutycheats.net'],
  ['www.cod-cheats.com', 'www.callofdutycheats.net'],
  ['cod-cheats.com', 'callofdutycheats.net'],
];

const SKIP_FILES = new Set([
  'migrate-to-callofdutycheats-net.mjs',
  'migrate-to-cod-cheats-com.mjs',
  'migrate-domain.mjs',
]);

let changed = 0;
for (const file of walk(root)) {
  const base = path.basename(file);
  if (SKIP_FILES.has(base)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let next = content;
  for (const [from, to] of PAIRS) {
    next = next.split(from).join(to);
  }
  if (next !== content) {
    fs.writeFileSync(file, next, 'utf8');
    changed++;
    console.log('  ', path.relative(root, file).replaceAll('\\', '/'));
  }
}

console.log(`Updated ${changed} files for callofdutycheats.net`);