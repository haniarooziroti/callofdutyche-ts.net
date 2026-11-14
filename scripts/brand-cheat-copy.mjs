import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const targets = [
  'src/i18n/en.ts',
  'src/data/products.ts',
  'src/data/blogs/posts.ts',
  'src/config/pageSeo.ts',
  'src/pages/reviews.astro',
  'src/pages/404.astro',
];

const SKIP_PATH = /call-of-duty-cheats|buy-cod-cheats|cod-cheats|\/cheats\//;

function transform(text) {
  return text
    .replace(/\bCall of Duty Cheats\b/g, 'Call of Duty Cheat')
    .replace(/\bCall of Duty cheats\b/g, 'Call of Duty cheat')
    .replace(/\bCOD cheats\b/g, 'COD cheat')
    .replace(/\bcod cheats\b/g, 'cod cheat')
    .replace(/\bcheats for PC\b/g, 'cheat for PC')
    .replace(/\bCheats for PC\b/g, 'Cheat for PC')
    .replace(/Guides &amp; Articles/g, 'Guides &amp; Blogs')
    .replace(/Guides & Articles/g, 'Guides & Blogs')
    .replace(/\bAll Articles\b/g, 'All guides')
    .replace(/checkout links/gi, 'store checkout')
    .replace(/partner platform/gi, 'store')
    .replace(/affiliate/gi, (m, offset, s) => {
      const lineStart = s.lastIndexOf('\n', offset);
      const chunk = s.slice(lineStart, offset + 40);
      if (SKIP_PATH.test(chunk)) return m;
      return 'store';
    });
}

let n = 0;
for (const rel of targets) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = transform(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    n++;
  }
}
console.log(`brand-cheat-copy: updated ${n} files`);