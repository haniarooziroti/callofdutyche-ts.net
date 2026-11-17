/**
 * Post-build: every internal href in dist/*.html must resolve to a file.
 */
import fs from 'node:fs';
import path from 'node:path';
import { resolveDistRoot } from './dist-root.mjs';

const dist = resolveDistRoot(process.cwd());
const hrefRe = /href="(\/[^"'#?]+)"/g;

function distPathExists(href) {
  if (!href || href.startsWith('/go/') || href.startsWith('/_astro/')) return true;
  if (href === '/rss.xml' || href === '/rss.xml/') return true;
  const bare = href.replace(/\/$/, '') || '/';
  if (bare === '/') return fs.existsSync(path.join(dist, 'index.html'));
  const rel = bare.slice(1);
  const asFile = path.join(dist, rel);
  if (fs.existsSync(asFile) && fs.statSync(asFile).isFile()) return true;
  return fs.existsSync(path.join(dist, rel, 'index.html'));
}

function walkHtml(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkHtml(full, out);
    else if (name.endsWith('.html')) out.push(full);
  }
  return out;
}

if (!fs.existsSync(dist)) {
  console.error('verify-internal-links: dist missing — run build first');
  process.exit(1);
}

const files = walkHtml(dist);
const issues = [];
const checked = new Set();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(dist, file).replace(/\\/g, '/');
  hrefRe.lastIndex = 0;
  let match;
  while ((match = hrefRe.exec(html))) {
    const href = match[1].endsWith('/') ? match[1] : `${match[1]}/`;
    const key = `${rel}→${href}`;
    if (checked.has(key)) continue;
    checked.add(key);
    if (!distPathExists(href)) {
      issues.push(`${rel}: broken href ${href}`);
    }
  }
}

if (issues.length) {
  console.error('verify-internal-links: FAILED');
  for (const line of issues) console.error(`  ${line}`);
  process.exit(1);
}

console.log(`verify-internal-links: OK (${files.length} HTML files, ${checked.size} href checks)`);