import { canonicalUrl, SITE_ORIGIN } from '../config/seo';
import { t } from '../i18n';

/** Minimal RSS stub — blog removed; feed lists homepage only. */
export function buildRssFeed(): string {
  const feedUrl = canonicalUrl('/rss.xml');
  const updated = new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${t.site.name} updates</title>
    <link>${SITE_ORIGIN}/</link>
    <description>${t.site.description}</description>
    <language>en-us</language>
    <lastBuildDate>${updated}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <item>
      <title>${t.site.title}</title>
      <link>${SITE_ORIGIN}/</link>
      <description>${t.site.description}</description>
    </item>
  </channel>
</rss>`;
}
