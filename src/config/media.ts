/**
 * Call of Duty MW4 imagery — local responsive WebP. Run `node scripts/sync-cod-mw4-media.mjs` to refresh assets.
 */
const base = '/images/call-of-duty';

/** Path ends with .webp so ResponsiveImage emits {base}-{width}.webp variants (no full-size masters in public). */
export const SEO_MEDIA = {
  heroOperations: `${base}/showcase-esp.webp`,
  heroPoster: `${base}/showcase-esp-640.webp`,
  espTactical: `${base}/showcase-esp.webp`,
  aimbotHud: `${base}/showcase-aim.webp`,
  wallhackLayout: `${base}/showcase-wall.webp`,
  lootIntel: `${base}/showcase-loot.webp`,
  nightRaid: `${base}/showcase-ops.webp`,
  chamsPreview: `${base}/chams-s1.webp`,
  chamsAlt: `${base}/chams-s2.webp`,
  dmaSetup: `${base}/gallery-21.webp`,
  mwTitle6: `${base}/mw-modernwarfare6.webp`,
  mwTitle3: `${base}/mw-modernwarfare3.webp`,
  mwTitle2: `${base}/mw-modernwarfare2.webp`,
  mwTitle1: `${base}/mw-modernwarfare1.webp`,
} as const;

/** Local hero clip (host file only — no third-party player). */
export const HERO_VIDEO = {
  src: '/videos/cod-hero.mp4',
  poster: SEO_MEDIA.heroPoster,
} as const;

export const SEO_MEDIA_LEGACY = {
  opsWide: SEO_MEDIA.heroOperations,
  raidLane: SEO_MEDIA.nightRaid,
} as const;

/** Default Open Graph preview when pages do not override. */
export const DEFAULT_OG_IMAGE_ABSOLUTE = SEO_MEDIA.heroPoster;

/** Rotating blog / content card images (all local, optimized WebPs). */
export const BLOG_FEATURE_IMAGES = [
  `${base}/gallery-08.webp`,
  `${base}/gallery-09.webp`,
  `${base}/gallery-10.webp`,
  `${base}/gallery-11.webp`,
  `${base}/gallery-12.webp`,
  `${base}/gallery-13.webp`,
  `${base}/gallery-14.webp`,
  `${base}/gallery-15.webp`,
  `${base}/gallery-16.webp`,
  `${base}/gallery-17.webp`,
  `${base}/gallery-22.webp`,
  `${base}/gallery-23.webp`,
  SEO_MEDIA.mwTitle6,
  SEO_MEDIA.mwTitle3,
  SEO_MEDIA.mwTitle2,
] as const;

export function blogFeatureImage(index: number): string {
  return BLOG_FEATURE_IMAGES[index % BLOG_FEATURE_IMAGES.length]!;
}