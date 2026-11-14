/** Old /blog/ slugs -> existing /blogs/ slugs. Same slug only when that article exists. */
export const BLOG_SLUG_REDIRECTS: Record<string, string> = {
  'how-to-install-cod-cheats': 'cod-cheats-setup',
  'cod-esp-settings': 'cod-esp-settings',
  'cod-aimbot-smoothing': 'cod-aimbot-fov',
  'cod-anti-cheat-notes': 'cod-patch-day-status',
  'cod-wallhack-layout': 'cod-wallhack-guide',
  'cod-triggerbot-timing': 'cod-no-recoil-guide',
  'cod-loader-errors': 'cod-cheats-setup',
  'hwid-spoof-new-cod-account': 'cod-cheats-setup',
  'cod-radar-overlay-tips': 'cod-esp-settings',
  'cod-stream-proof-overlays': 'cod-stream-safe-obs',
  'aimbot-hud-tuning': 'cod-aimbot-fov',
  'esp-tactical-layout': 'cod-esp-settings',
  'wallhack-breach-reads': 'cod-wallhack-guide',
  'extraction-loot-filters': 'buy-cod-cheats',
};

export const BLOGS_SLUGS = new Set([
  'buy-cod-cheats',
  'cod-aimbot-fov',
  'cod-cheats-free-vs-paid',
  'cod-wallhack-guide',
  'cod-esp-settings',
  'cod-no-recoil-guide',
  'cod-cheats-setup',
  'cod-patch-day-status',
  'cod-stream-safe-obs',
  'cod-patch-log',
  'cod-choose-plan',
]);

export const CANONICAL_ORIGIN = 'https://cod-cheat.net';

/** Absolute 301 target, or null if this path is not a legacy blog URL. Query strings are dropped. */
export function legacyBlogRedirect(pathname: string): string | null {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path !== '/blog' && !path.startsWith('/blog/')) return null;
  if (path === '/blog') return `${CANONICAL_ORIGIN}/blogs/`;
  const slug = path.slice('/blog/'.length).split('/').filter(Boolean)[0] ?? '';
  const mapped = BLOG_SLUG_REDIRECTS[slug];
  if (mapped && BLOGS_SLUGS.has(mapped)) return `${CANONICAL_ORIGIN}/blogs/${mapped}/`;
  if (BLOGS_SLUGS.has(slug)) return `${CANONICAL_ORIGIN}/blogs/${slug}/`;
  return `${CANONICAL_ORIGIN}/blogs/`;
}
