import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SCAN_DIRS = ['src', 'public', 'worker'];
const SCAN_ALLOW_FILES = new Set([
  path.join('public', '_redirects'),
  path.join('src', 'config', 'checkout-redirects.mjs'),
  path.join('src', 'utils', 'path.ts'),
]);
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const TERMS = [
  'valorant',
  'apex legends',
  'escape from tarkov',
  'overwatch 2',
  'caliber',
  'robrun',
  'hunt: showdown',
  'deadlock',
  'bodycam',
  'fortnite',
  'pubg',
  'cs2',
  'rainbow six',
  'nba 2k',
  'delta force',
  'deltaforce',
  'hawk ops',
  'havoc warfare',
];

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, files);
    else if (/\.(ts|astro|mjs|js|json|html|css|txt|svg|md)$/i.test(name) || name === '_redirects') files.push(full);
  }
  return files;
}

let failures = 0;
for (const dir of SCAN_DIRS) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
  const rel = path.relative(root, file);
  if (SCAN_ALLOW_FILES.has(rel)) continue;
    const text = fs.readFileSync(file, 'utf8').toLowerCase();
    for (const term of TERMS) {
      if (text.includes(term)) {
        console.error(`LEFTOVER "${term}" in ${path.relative(root, file)}`);
        failures++;
      }
    }
  }
}

const affiliate = fs.readFileSync(path.join(root, 'src/config/affiliate-links.mjs'), 'utf8');
const expectedAffiliate = [
  'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fcall-of-duty',
  'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fcloud-dma',
  'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fhwid-spoofer',
];
for (const url of expectedAffiliate) {
  if (!affiliate.includes(url)) {
    console.error(`AFFILIATE URL missing: ${url}`);
    failures++;
  }
}

if (failures) {
  console.error(`audit-leftovers: ${failures} issue(s)`);
  process.exit(1);
}
console.log('audit-leftovers: PASS');