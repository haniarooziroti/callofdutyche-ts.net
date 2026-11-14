/** Production origin for sitemap, RSS, canonicals, and post-build checks. */
export const SITE_DOMAIN = 'cod-cheats.net';
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;

/** Brand / host spellings that must never appear in dist/ or as SITE_DOMAIN. */
export const WRONG_DOMAIN_VARIANTS = [
  'cs2-cheats.com',
  'cs2-cheats.org',
  'cs2cheats.org',
  'COD Cheats-cheats.com',
  'COD Cheats-cheats.net',
  'cod-cheats.net',
  'www.cod-cheats.net',
  'COD Cheats-cheat.org',
  'delta-force-cheats.org',
  'www.cod-cheats.net',
];

/**
 * Default origin is always https://cod-cheats.net.
 * PUBLIC_SITE_ORIGIN containing workers.dev is a misconfig — fail closed.
 */
export function resolveSiteOrigin(env = process.env) {
  const raw = env.PUBLIC_SITE_ORIGIN?.trim();
  if (raw && raw.includes('workers.dev')) {
    throw new Error(
      'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://cod-cheats.net for production origin.',
    );
  }
  return SITE_ORIGIN;
}

export function assertSiteOrigin(env = process.env) {
  resolveSiteOrigin(env);
}
