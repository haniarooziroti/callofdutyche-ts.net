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
    path === '/forum/cod-forum-aimbot/' ||
    path === '/forum/cod-esp-night/' ||
    path === '/forum/cod-wallhack-box/' ||
    path === '/forum/cod-hwid-account/' ||
    path === '/forum/cod-patch-loader/' ||
    path === '/forum/cod-checkout/'
  ) {
    return undefined;
  }

  delete item.changefreq;
  delete item.priority;

  return item;
}
