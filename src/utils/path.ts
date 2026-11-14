import { PRODUCT_BASE } from '../config/site';

const storePath = `${PRODUCT_BASE}modules/`;

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': storePath,
  '/cheats/lite/': storePath,
  '/cheats/pro': storePath,
  '/cheats/pro/': storePath,
  '/cheats/elite': storePath,
  '/cheats/elite/': storePath,
  '/products/other-cheats': PRODUCT_BASE,
  '/products/other-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats': PRODUCT_BASE,
  '/products/dota-2-cheats/': PRODUCT_BASE,
  '/products/dota-2-cheats/utilities': `${PRODUCT_BASE}utilities/`,
  '/products/dota-2-cheats/utilities/': `${PRODUCT_BASE}utilities/`,
  '/contact': '/support/',
  '/contact/': '/support/',
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blogs/',
  blogs: '/blogs/',
  reviews: '/reviews/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsStorefront: storePath,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
