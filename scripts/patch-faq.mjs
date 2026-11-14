import fs from 'node:fs';

const p = 'src/data/faq.ts';
let s = fs.readFileSync(p, 'utf8');

s = s
  .replaceAll('cs2-cheats.org', 'cod-cheats.net')
  .replaceAll('/products/cs2-cheats/', '/products/call-of-duty-cheats/')
  .replaceAll('cs2-store', 'call-of-duty-store')
  .replaceAll('CS2', 'Call of Duty')
  .replaceAll('Counter-Strike 2', 'Call of Duty')
  .replaceAll('ROUTES.blog', 'ROUTES.forum')
  .replace(/CS2 setup & tuning article library/g, 'Call of Duty forum threads');

fs.writeFileSync(p, s);
console.log('patched faq.ts');
