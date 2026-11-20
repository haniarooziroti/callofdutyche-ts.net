/** Production origin for sitemap, RSS, canonicals, and post-build checks. */
export const SITE_DOMAIN = 'callofdutycheats.net';
export const SITE_ORIGIN = `https://${SITE_DOMAIN}`;

/** Brand / host spellings that must never appear in dist/ or as SITE_DOMAIN. */
export const WRONG_DOMAIN_VARIANTS = [
  'cod-cheats.com',
  'www.cod-cheats.com',
  'cod-cheats.net',
  'www.cod-cheats.net',
  'cs2-cheats.com',
  'cs2-cheats.org',
  'cs2cheats.org',
  'delta-force-cheats.org',
  'deltaforce-cheats.org',
  'cod-che-ts.net',
  'www.cod-che-ts.net',
];

/**
 * Default origin is always https://callofdutycheats.net.
 * PUBLIC_SITE_ORIGIN containing workers.dev is a misconfig — fail closed.
 */
export function resolveSiteOrigin(env = process.env) {
  const raw = env.PUBLIC_SITE_ORIGIN?.trim();
  if (raw && raw.includes('workers.dev')) {
    throw new Error(
      'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://callofdutycheats.net for production origin.',
    );
  }
  return SITE_ORIGIN;
}

export function assertSiteOrigin(env = process.env) {
  resolveSiteOrigin(env);
}