import type { ProductPage } from '../data/products';
import { t } from '../i18n';
import { SITE_DOMAIN, SITE_URL } from './site';
import { getPageSeoEntry, type PageSeoEntry } from './pageSeo';

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, '');
}

/**
 * Canonical / OG / hreflang base URL — always production (callofdutycheats.net).
 * Preview hosts must not leak into canonicals or sitemap-facing meta.
 */
export const SITE_ORIGIN = normalizeOrigin(SITE_URL);

/** Hostname only — IndexNow key file location must match this host when deploying. */
export const SITE_HOSTNAME = (() => {
  try {
    return new URL(SITE_ORIGIN).hostname;
  } catch {
    return SITE_DOMAIN;
  }
})();

/** Default social preview — generated from `public/logo-master.png` as `og-image-v2.png` (see generate-brand-icons). */
export const DEFAULT_OG_IMAGE = '/og-image-v2.png';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_MEASUREMENT_ID as string | undefined;

export const TWITTER_SITE = import.meta.env.PUBLIC_TWITTER_SITE as string | undefined;

export const TWITTER_CREATOR = import.meta.env.PUBLIC_TWITTER_CREATOR as string | undefined;

/** Comma-separated profile URLs (X, YouTube, etc.) for Organization sameAs. */
export function getOrganizationSameAs(): string[] {
  const raw = import.meta.env.PUBLIC_ORG_SAME_AS as string | undefined;
  if (!raw?.trim()) return [];
  return raw
    .split(',')
    .map((entry) => entry.trim())
    .filter(Boolean);
}

export const INDEXNOW_KEY = import.meta.env.INDEXNOW_KEY as string | undefined;

export function canonicalUrl(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return `${SITE_ORIGIN}${path}`;
}

export function absoluteAssetUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

/** Hub and static routes — titles/descriptions are authored in pageSeo (see scripts/seo-check.mjs). */
export function resolvePageSeo(pathname: string): PageSeoEntry {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

const TITLE_MAX = 60;

/** Brand suffix for `<title>` when building from a keyword phrase. */
export function titleBrandSuffix(): string {
  return ` | ${t.site.domain}`;
}

function trimTitleHead(head: string, suffix: string): string {
  let h = head.replace(/\s+/g, ' ').trim();
  while (h.length > 0 && `${h}${suffix}`.length > TITLE_MAX) {
    const shorter = h.replace(/\s+[—–-]?\s*\S+$/, '').trim();
    if (!shorter || shorter === h) h = h.slice(0, -1).trim();
    else h = shorter;
  }
  const maxHead = Math.max(1, TITLE_MAX - suffix.length);
  if (h.length > maxHead) h = h.slice(0, maxHead).replace(/\s+\S*$/, '').trim();
  return h;
}

/** Forum thread titles: keyword plus domain only — no auto-padded filler (seo-check warns if short). */
export function pageTitle(keyword: string, suffixSite = t.site.domain): string {
  const suffix = ` | ${suffixSite}`;
  const k = keyword.replace(/\s+/g, ' ').trim();
  const branded = `${k}${suffix}`;
  if (branded.length <= TITLE_MAX) return branded;
  const head = trimTitleHead(k, suffix);
  return `${head}${suffix}`;
}

/** Product detail `<title>` — authored strings per slug. */
export function productPageTitle(product: Pick<ProductPage, 'title' | 'kind' | 'slug'>): string {
  if (product.slug === 'modules') {
    return 'Call of Duty Cheat Modules | Call of Duty Cheats';
  }
  if (product.slug === 'cloud-dma') {
    return 'Call of Duty Cloud DMA | Call of Duty Cheats';
  }
  if (product.slug === 'hwid-spoofer') {
    return 'Call of Duty HWID Spoofer | Call of Duty Cheats';
  }
  if (product.slug === 'appeals') {
    return 'Call of Duty Ban Paperwork | Call of Duty Cheats';
  }
  const phrase = `${product.title} | Call of Duty`;
  return phrase.length >= 50 && phrase.length <= 60 ? phrase : phrase.slice(0, 60);
}

const DESC_MAX = 155;

/** Truncate only — no boilerplate padding (seo-check warns if out of range). */
export function metaDescription(text: string): string {
  const body = text.trim().replace(/\s+/g, ' ');
  if (body.length <= DESC_MAX) return body;
  return `${body.slice(0, DESC_MAX - 1).replace(/\s+\S*$/, '').trim()}…`;
}

/** @deprecated Use metaDescription */
export function cheatMetaDescription(text: string): string {
  return metaDescription(text);
}

/** @deprecated Use metaDescription */
export function ensureMetaDescription(text: string, _prefix = ''): string {
  return metaDescription(text);
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = SITE_HOSTNAME;