import type { SitemapItem } from '@astrojs/sitemap';

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (
    path.includes('/404') ||
    path.startsWith('/go/') ||
    path.includes('/rss.xml') ||
    path.startsWith('/cheats/') ||
    path === '/contact/' ||
    path.startsWith('/products/dota-2-cheats/') ||
    path.startsWith('/products/other-cheats/') ||
    path === '/blog/' ||
    path.startsWith('/blog/') ||
    path === '/forum/aimbot-fov-smoothness-ranked-ops/' ||
    path === '/forum/esp-clutter-night-raids/' ||
    path === '/forum/wallhack-skeleton-vs-box-only/' ||
    path === '/forum/hwid-spoof-before-new-account/' ||
    path === '/forum/patch-night-loader-verify-spin/' ||
    path === '/forum/cod-checkout-plans/'
  ) {
    return undefined;
  }

  delete item.changefreq;
  delete item.priority;

  return item;
}
