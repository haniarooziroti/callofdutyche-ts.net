import { resolveSiteOrigin } from './site-origin.mjs';

resolveSiteOrigin();

/** Must match PRODUCT_BASE in src/config/site.ts */
const PRODUCT_BASE = '/products/call-of-duty-cheats/';
const productsBase = PRODUCT_BASE.replace(/\/$/, '');
const utilitiesPath = `${productsBase}/utilities/`;
const storePath = `${productsBase}call-of-duty-store/`;

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/forum', '/forum/'],
  ['/blog', '/forum/'],
  ['/blog/', '/forum/'],
  ['/cheats', PRODUCT_BASE],
  ['/cheats/', PRODUCT_BASE],
  ['/cheats/lite', storePath],
  ['/cheats/lite/', storePath],
  ['/cheats/pro', storePath],
  ['/cheats/pro/', storePath],
  ['/cheats/elite', storePath],
  ['/cheats/elite/', storePath],
  [`${productsBase}/lite`, storePath],
  [`${productsBase}/lite/`, storePath],
  [`${productsBase}/pro`, storePath],
  [`${productsBase}/pro/`, storePath],
  [`${productsBase}/elite`, storePath],
  [`${productsBase}/elite/`, storePath],
  ['/products/cs2-cheats', PRODUCT_BASE],
  ['/products/cs2-cheats/', PRODUCT_BASE],
  [`/products/cs2-cheats/lite`, storePath],
  [`/products/cs2-cheats/lite/`, storePath],
  [`/products/cs2-cheats/pro`, storePath],
  [`/products/cs2-cheats/pro/`, storePath],
  [`/products/cs2-cheats/elite`, storePath],
  [`/products/cs2-cheats/elite/`, storePath],
  [`/products/cs2-cheats/cs2-store`, storePath],
  [`/products/cs2-cheats/cs2-store/`, storePath],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/dota-2-cheats/utilities', utilitiesPath],
  ['/products/dota-2-cheats/utilities/', utilitiesPath],
  ['/products/dota-2-cheats', PRODUCT_BASE],
  ['/products/dota-2-cheats/', PRODUCT_BASE],
  ['/products/dota-2-cheats/account-recovery', `${productsBase}ugc/`],
  ['/products/dota-2-cheats/account-recovery/', `${productsBase}ugc/`],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
