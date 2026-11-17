import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SKIP = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set(['scripts/site-origin.mjs', 'scripts/migrate-domain.mjs', 'scripts/finish-cod-site.mjs']);
const exts = new Set(['.ts', '.astro', '.mjs', '.js', '.json', '.jsonc', '.css', '.md', '.txt', '.html', '.svg']);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const files = [];
for (const dir of ['src', 'public', 'worker', 'scripts', '.']) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  if (dir === '.') {
    for (const name of ['README.md', '.env.example', 'astro.config.mjs', 'wrangler.jsonc']) {
      const f = path.join(root, name);
      if (fs.existsSync(f)) files.push(f);
    }
    continue;
  }
  walk(abs, files);
}

let changed = 0;
for (const file of files) {
  const rel = path.relative(root, file).replace(/\\/g, '/');
  if (SKIP_FILES.has(rel)) continue;
  const base = path.basename(file);
  if (!exts.has(path.extname(file)) && base !== '_redirects' && base !== 'robots.txt') continue;
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('cod-cheats.net')) continue;
  fs.writeFileSync(file, content.split('cod-cheats.net').join('cod-cheats.com'), 'utf8');
  changed++;
}
console.log(`migrate-domain: updated ${changed} files`);