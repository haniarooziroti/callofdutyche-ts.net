/**
 * Scan dist/blogs HTML for internal hrefs and assert local paths exist in dist/.
 */
import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const blogsDir = path.join(dist, 'blogs');

if (!fs.existsSync(blogsDir)) {
  console.error('verify-blog-links: dist/blogs/ missing — run build first');
  process.exit(1);
}

const hrefRe = /href="(\/[^"#?]+)"/g;

function distPathExists(href) {
  if (!href || href.startsWith('/go/')) return true;
  const bare = href.replace(/\/$/, '') || '/';
  if (bare === '/') return fs.existsSync(path.join(dist, 'index.html'));
  const rel = bare.slice(1);
  const asFile = path.join(dist, rel);
  if (fs.existsSync(asFile) && fs.statSync(asFile).isFile()) return true;
  const asHtml = path.join(dist, rel, 'index.html');
  return fs.existsSync(asHtml);
}
const files = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (name.endsWith('.html')) files.push(full);
  }
}

walk(blogsDir);

const issues = [];
const seen = new Set();

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  if (html.includes('workers.dev')) {
    issues.push({ file, msg: 'contains workers.dev' });
  }
  const body =
    html.match(/class="commercial-blog[\s\S]*$/i)?.[0] ??
    html.match(/data-blogs-card[\s\S]*$/i)?.[0] ??
    html;
  let match;
  hrefRe.lastIndex = 0;
  while ((match = hrefRe.exec(body))) {
    let href = match[1];
    if (href.startsWith('/go/')) continue;
    if (href.includes('#')) href = href.split('#')[0];
    if (href.startsWith('/_astro/')) continue;
    if (seen.has(href)) continue;
    seen.add(href);
    if (!distPathExists(href)) {
      issues.push({ file, msg: `broken href ${href}` });
    }
  }
}

if (issues.length) {
  console.error('verify-blog-links: FAILED');
  for (const i of issues) console.error(`  ${path.relative(dist, i.file)}: ${i.msg}`);
  process.exit(1);
}

console.log(`verify-blog-links: OK (${files.length} blog HTML files, ${seen.size} unique internal paths)`);
