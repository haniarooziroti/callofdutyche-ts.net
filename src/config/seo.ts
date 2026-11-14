import type { ProductPage } from '../data/products';
import { t } from '../i18n';
import { SITE_DOMAIN, SITE_URL } from './site';
import { getPageSeoEntry, type PageSeoEntry } from './pageSeo';

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, '');
}

/**
 * Canonical / OG / hreflang base URL — always production (cod-cheat.net).
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

export function resolvePageSeo(pathname: string): PageSeoEntry {
  const entry = getPageSeoEntry(pathname);
  if (entry) return entry;
  return { title: t.site.title, description: t.site.description };
}

const TITLE_MIN = 50;
const TITLE_MAX = 60;

/** Brand suffix for `<title>` when building from a keyword phrase. */
export function titleBrandSuffix(): string {
  return ` | ${t.site.domain}`;
}

/** Article / thread titles: complete 50–60 character phrase. Never cut mid-sentence. */
export function pageTitle(keyword: string, suffixSite = t.site.domain): string {
  const suffix = ` | ${suffixSite}`;
  const k = keyword.replace(/\s+/g, ' ').trim();
  const withBrand = `${k}${suffix}`;
  if (withBrand.length >= TITLE_MIN && withBrand.length <= TITLE_MAX) return withBrand;
  if (k.length >= TITLE_MIN && k.length <= TITLE_MAX) return k;
  return withBrand.length < TITLE_MIN ? withBrand : k;
}

/** Product detail `<title>` — 50–60 chars with main cheat page vs utility phrasing. */
export function productPageTitle(product: Pick<ProductPage, 'title' | 'kind' | 'slug'>): string {
  if (product.slug === 'modules') {
    return 'Call of Duty Cheat Modules for ESP, Aimbot and Loot';
  }
  if (product.slug === 'cloud-dma') {
    return 'Call of Duty Cloud DMA Hardware | Cabling and Notes';
  }
  if (product.slug === 'hwid-spoofer') {
    return 'Call of Duty HWID Spoofer | Fresh Windows Identifiers';
  }
  if (product.slug === 'appeals') {
    return 'Account Appeals for Call of Duty | Evidence Workspace';
  }
  const phrase = `${product.title} | Call of Duty`;
  return phrase.length >= 50 && phrase.length <= 60 ? phrase : phrase.slice(0, 60);
}

/** Forum thread meta — keep descriptions direct for SERP snippets. */
export function cheatMetaDescription(text: string): string {
  const trimmed = text.trim();
  if (/Call of Duty/i.test(trimmed) && trimmed.length >= 80) return trimmed;
  const body = trimmed.length > 130 ? `${trimmed.slice(0, 127)}…` : trimmed;
  return `Call of Duty cheats forum: ${body}`;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = SITE_HOSTNAME;
