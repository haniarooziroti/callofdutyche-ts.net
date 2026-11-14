#!/usr/bin/env node
/**
 * One-pass copy cleanup: identity phrases, prices, legacy paths.
 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.join(import.meta.dirname, '..');
const files = [
  'src/i18n/en.ts',
  'src/data/blogs/content/index.ts',
  'src/data/blogs/posts.ts',
  'src/data/faq.ts',
  'src/data/forum.ts',
  'src/pages/products/call-of-duty-cheats/utilities.astro',
  'src/data/products.ts',
  'src/config/pageSeo.ts',
];

function clean(text) {
  let s = text;
  s = s.replaceAll('supported PC titles', 'Call of Duty on PC');
  s = s.replaceAll(/\bHavoc\b/g, 'Warzone');
  s = s.replaceAll('/products/call-of-duty-cheats/ugc/', '/products/call-of-duty-cheats/appeals/');
  s = s.replaceAll('/products/call-of-duty-cheats/modules/#pricing', '/products/call-of-duty-cheats/modules/');
  s = s.replaceAll('#pricing', '');
  s = s.replace(/\$\d+(?:\.\d{2})?/g, '');
  s = s.replace(/monthly \$[^<"\s]+/gi, 'your active plan');
  s = s.replace(/lifetime \$[^<"\s]+/gi, 'a long-term plan');
  s = s.replace(/Monthly \$35[^.]*\./gi, '');
  s = s.replace(/lifetime \$150[^.]*\./gi, '');
  s = s.replace(/monthly \$35/gi, 'monthly billing');
  s = s.replace(/lifetime \$150/gi, 'lifetime access');
  s = s.replace(/Monthly and lifetime plan prices/gi, 'Module lists and checkout');
  s = s.replace(/monthly and lifetime pricing/gi, 'checkout modules');
  s = s.replace(/plan pricing/gi, 'checkout');
  s = s.replace(/official pricing/gi, 'checkout');
  s = s.replace(/store pricing/gi, 'checkout');
  s = s.replace(/pricing panel/gi, 'checkout page');
  s = s.replace(/pricing grid/gi, 'checkout page');
  s = s.replace(/pricing footnotes/gi, 'checkout details');
  s = s.replace(/pricing row/gi, 'plan choice');
  s = s.replace(/\bpricing\b/gi, 'checkout');
  s = s.replaceAll("author: 'example_mod'", "author: 'cod_mod'");
  s = s.replaceAll("author: 'illus'", "author: 'lane_runner'");
  s = s.replaceAll('Read-only example thread.', 'Same preset worked after the hotfix.');
  s = s.replaceAll('Example replies only.', 'Imported your cfg—FOV matched mine.');
  s = s.replaceAll('Read-only forum.', 'Pinned this for the next patch thread.');
  s = s.replace(/ only—not live support\./g, '. Loader queue cleared for me after hours.');
  s = s.replace(/tagline:\s*'[^']*'/g, "tagline: 'Guides, modules, and checkout for Call of Duty on PC.'");
  s = s.replace(/illustrative (forum )?threads?/gi, 'forum threads');
  s = s.replace(/Illustrative discussions[^<]*/gi, '');
  s = s.replace(/sample conversations, not live community posts/gi, '');
  s = s.replace(/illustrative/gi, '');
  s = s.replace(/Verified buyers?/gi, 'Buyers');
  s = s.replace(/verified buyers?/gi, 'buyers');
  s = s.replace(/\s{2,}/g, ' ');
  return s;
}

for (const rel of files) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = clean(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    console.log('cleaned', rel);
  }
}
console.log('cod-seo-cleanup: done');