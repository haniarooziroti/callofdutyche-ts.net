/**
 * Rebrand Delta Force template → Call of Duty (cod-cheats.net).
 * Run from repo root: node scripts/finish-cod-site.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);

const TEXT_EXT = new Set([
  '.ts',
  '.tsx',
  '.astro',
  '.mjs',
  '.js',
  '.json',
  '.jsonc',
  '.css',
  '.md',
  '.svg',
  '.html',
  '.txt',
  '_redirects',
]);

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function rel(p) {
  return path.relative(root, p).replaceAll('\\', '/');
}

const replacements = [
  ['https://deltaforce-cheats.org', 'https://cod-cheats.net'],
  ['deltaforce-cheats.org', 'cod-cheats.net'],
  ['deltaforcecheats.org', 'cod-cheats.net'],
  ['www.deltaforce-cheats.org', 'www.cod-cheats.net'],
  ['deltaforce-che-ts-org', 'cod-che-ts-net'],
  ['/products/delta-force-cheats/', '/products/call-of-duty-cheats/'],
  ['products/delta-force-cheats', 'products/call-of-duty-cheats'],
  ['/go/delta-force/', '/go/call-of-duty/'],
  ['/go/delta-force', '/go/call-of-duty'],
  ['delta-force-store', 'call-of-duty-store'],
  ["'delta-force'", "'call-of-duty'"],
  ['"delta-force"', '"call-of-duty"'],
  ['%2Fproducts%2Fdelta-force', '%2Fproducts%2Fcall-of-duty'],
  ['Delta Force cheats', 'Call of Duty cheats'],
  ['Delta Force Cheats', 'Call of Duty Cheats'],
  ['Delta Force cheat', 'Call of Duty cheat'],
  ['Delta Force Cheat', 'Call of Duty Cheat'],
  ['Delta Force hacks', 'Call of Duty hacks'],
  ['Delta Force hack', 'Call of Duty hack'],
  ['Delta Force ', 'Call of Duty '],
  ['Delta Force', 'Call of Duty'],
  ['delta force', 'Call of Duty'],
  ['deltaforce', 'COD Cheats'],
  ['Hawk Ops', 'supported PC titles'],
  ['Havoc Warfare', 'Multiplayer'],
  ['TITLE_PREFIX', 'TITLE_PREFIX'], // noop anchor
];

function applyReplacements(content) {
  let next = content;
  for (const [from, to] of replacements) {
    if (from === 'TITLE_PREFIX') continue;
    next = next.split(from).join(to);
  }
  return next;
}

// Rename product routes directory
const oldProductDir = path.join(root, 'src/pages/products/delta-force-cheats');
const newProductDir = path.join(root, 'src/pages/products/call-of-duty-cheats');
if (fs.existsSync(oldProductDir) && !fs.existsSync(newProductDir)) {
  fs.renameSync(oldProductDir, newProductDir);
  console.log('Renamed product pages directory → call-of-duty-cheats');
}

const files = walk(root).filter((f) => {
  const base = path.basename(f);
  if (base === 'finish-cod-site.mjs') return false;
  const ext = path.extname(f);
  if (TEXT_EXT.has(ext) || base === '_redirects') return true;
  return false;
});

function writeFile(relPath, content) {
  fs.writeFileSync(path.join(root, relPath), content, 'utf8');
}

let changed = 0;
for (const file of files) {
  const before = fs.readFileSync(file, 'utf8');
  const after = applyReplacements(before);
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    changed++;
  }
}

// --- pinned config overrides ---
writeFile('src/config/site.ts', `const envOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
if (envOrigin && envOrigin.includes('workers.dev')) {
  throw new Error(
    'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://cod-cheats.net for production origin.',
  );
}

export const SITE_DOMAIN = 'cod-cheats.net';
export const SITE_URL = 'https://cod-cheats.net';
export const PRODUCT_BASE = '/products/call-of-duty-cheats/';
export const TITLE_PREFIX = 'Call of Duty';

/** Public community invite (external). Single source of truth for UI + FAQ copy—not an affiliate link. */
export const DISCORD_URL = 'https://discord.com/invite/Vu85F8auQS';
`);

writeFile(
  'src/config/checkout-redirects.mjs',
  `/** Single store destination — buy buttons use internal /go/ paths only. */
const STORE_URL = 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fcall-of-duty';

export const CHECKOUT_URLS = {
  'call-of-duty': STORE_URL,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/call-of-duty', CHECKOUT_URLS['call-of-duty']],
  ['/go/call-of-duty/', CHECKOUT_URLS['call-of-duty']],
  ['/go/store', CHECKOUT_URLS['call-of-duty']],
  ['/go/store/', CHECKOUT_URLS['call-of-duty']],
  ['/go/delta-force', CHECKOUT_URLS['call-of-duty']],
  ['/go/delta-force/', CHECKOUT_URLS['call-of-duty']],
]);

export const LEGACY_PRODUCT_REDIRECTS = new Map([
  ['/products/delta-force-cheats/', '/products/call-of-duty-cheats/'],
  ['/products/call-of-duty-cheats/lite/', '/products/call-of-duty-cheats/call-of-duty-store/'],
  ['/products/call-of-duty-cheats/pro/', '/products/call-of-duty-cheats/call-of-duty-store/'],
  ['/products/call-of-duty-cheats/elite/', '/products/call-of-duty-cheats/call-of-duty-store/'],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(\`\${pathname}/\`) ?? null;
  }

  return null;
}

export function resolveLegacyProductRedirect(pathname) {
  const direct = LEGACY_PRODUCT_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return LEGACY_PRODUCT_REDIRECTS.get(\`\${pathname}/\`) ?? null;
  }
  return null;
}
`,
);

writeFile(
  'wrangler.jsonc',
  `{
  "name": "cod-che-ts-net",
  "main": "worker/index.ts",
  "compatibility_date": "2026-11-01",
  "assets": {
    "directory": "./dist",
    "binding": "ASSETS",
    "html_handling": "auto-trailing-slash",
    "not_found_handling": "404-page"
  }
}
`,
);

console.log(`finish-cod-site: updated ${changed} files (+ pinned site/checkout/wrangler).`);