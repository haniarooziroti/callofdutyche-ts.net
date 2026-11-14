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

const TITLE_MIN = 50;
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 155;

export function resolvePageSeo(pathname: string): PageSeoEntry {
  const entry = getPageSeoEntry(pathname);
  const base = entry ?? { title: t.site.title, description: t.site.description };
  const title =
    base.title.length >= TITLE_MIN && base.title.length <= TITLE_MAX
      ? base.title
      : pageTitle(base.title.split('|')[0]?.trim() || base.title);
  return {
    title,
    description: ensureMetaDescription(base.description),
  };
}

/** Brand suffix for `<title>` when building from a keyword phrase. */
export function titleBrandSuffix(): string {
  return ` | ${t.site.domain}`;
}

function withTitleSuffix(head: string, suffix: string): string {
  return `${head}${suffix}`;
}

function trimTitleHead(head: string, suffix: string): string {
  let h = head.replace(/\s+/g, ' ').trim();
  while (h.length > 0 && withTitleSuffix(h, suffix).length > TITLE_MAX) {
    const shorter = h.replace(/\s+[—–-]?\s*\S+$/, '').trim();
    if (!shorter || shorter === h) h = h.slice(0, -1).trim();
    else h = shorter;
  }
  const maxHead = Math.max(1, TITLE_MAX - suffix.length);
  if (h.length > maxHead) h = h.slice(0, maxHead).replace(/\s+\S*$/, '').trim();
  return h;
}

/** Article / thread titles: complete 50–60 character phrase. Never cut mid-sentence. */
export function pageTitle(keyword: string, suffixSite = t.site.domain): string {
  const suffix = ` | ${suffixSite}`;
  const k = keyword.replace(/\s+/g, ' ').trim();

  const branded = withTitleSuffix(k, suffix);
  if (branded.length >= TITLE_MIN && branded.length <= TITLE_MAX) return branded;

  if (branded.length > TITLE_MAX) {
    const head = trimTitleHead(k, suffix);
    const out = withTitleSuffix(head, suffix);
    if (out.length >= TITLE_MIN && out.length <= TITLE_MAX) return out;
  }

  if (k.length >= TITLE_MIN && k.length <= TITLE_MAX) return k;

  const shortTitlePads = [
    withTitleSuffix(`${k} — COD cheat`, suffix),
    withTitleSuffix(`${k} — COD cheat forum`, suffix),
    withTitleSuffix(`Call of Duty: ${k}`, suffix),
  ];
  for (const candidate of shortTitlePads) {
    if (candidate.length >= TITLE_MIN && candidate.length <= TITLE_MAX) return candidate;
    if (candidate.length > TITLE_MAX) {
      const head = trimTitleHead(candidate.slice(0, -suffix.length), suffix);
      const trimmed = withTitleSuffix(head, suffix);
      if (trimmed.length >= TITLE_MIN && trimmed.length <= TITLE_MAX) return trimmed;
    }
  }

  const head = trimTitleHead(k || 'Call of Duty cheat forum', suffix);
  const out = withTitleSuffix(head, suffix);
  if (out.length >= TITLE_MIN) return out.slice(0, TITLE_MAX);

  return shortTitlePads[0].slice(0, TITLE_MAX);
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
  return ensureMetaDescription(text, 'Call of Duty cheat forum thread');
}

/** Normalize meta descriptions to 120–155 characters for built pages. */
export function ensureMetaDescription(text: string, prefix = ''): string {
  let body = text.trim().replace(/\s+/g, ' ');
  if (prefix && !/^Call of Duty/i.test(body)) body = `${prefix}: ${body}`;
  else if (!/^Call of Duty/i.test(body)) body = `Call of Duty cheat guides: ${body}`;

  const padTail =
    ' Read ESP, aimbot, and loader notes on cod-cheat.net before checkout.';
  if (body.length < DESC_MIN) body = `${body}${padTail}`;
  if (body.length < DESC_MIN) {
    body = `${body} Compare modules, plans, and PC compatibility on the catalog.`;
  }

  while (body.length > DESC_MAX) {
    body = `${body.slice(0, DESC_MAX - 1).replace(/\s+\S*$/, '').trim()}…`;
  }

  return body;
}

export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

export const RSS_FEED_PATH = '/rss.xml';

/** Used by IndexNow postbuild script. */
export const INDEXNOW_HOST = SITE_HOSTNAME;
