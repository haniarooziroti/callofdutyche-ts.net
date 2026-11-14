import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'src/data/blogs/posts.ts');
let s = fs.readFileSync(file, 'utf8');

const dropSlugs = new Set(['cod-aimbot-guide', 'cod-compatibility', 'cod-cheats-faq']);

const metaStart = s.indexOf('const meta: BlogMeta[] = [');
const metaEnd = s.indexOf(']; function priceBody');
if (metaStart < 0 || metaEnd < 0) throw new Error('Could not locate meta array');

const head = s.slice(0, metaStart);
const tail = s.slice(metaEnd);
const arrBody = s.slice(metaStart + 'const meta: BlogMeta[] = ['.length, metaEnd);

const entries = [];
let depth = 0;
let buf = '';
for (let i = 0; i < arrBody.length; i++) {
  const ch = arrBody[i];
  buf += ch;
  if (ch === '{') depth++;
  if (ch === '}') {
    depth--;
    if (depth === 0) {
      const trimmed = buf.trim().replace(/^,\s*/, '');
      const slugMatch = trimmed.match(/slug:\s*'([^']+)'/);
      if (slugMatch && !dropSlugs.has(slugMatch[1])) entries.push(trimmed);
      buf = '';
    }
  }
}

const meta = `const meta: BlogMeta[] = [\n  ${entries.join(',\n  ')},\n`;
s = `${head}${meta}${tail}`;

s = s.replace(/cod-requirements/g, 'buy-cod-cheats');
s = s.replace(/cod-anticheat/g, 'cod-patch-day-status');

if (!s.includes('function priceBody')) {
  s = s.replace(
    ']; function priceBody',
    ']; function priceBody<T>(value: T): T { return value; }\nfunction priceBody',
  );
}

fs.writeFileSync(file, s, 'utf8');
console.log('patch-blog-meta: OK, kept', entries.length, 'posts');