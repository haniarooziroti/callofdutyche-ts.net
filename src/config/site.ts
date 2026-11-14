const envOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
if (envOrigin && envOrigin.includes('workers.dev')) {
  throw new Error(
    'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://cod-cheats.net for production origin.',
  );
}

export const SITE_DOMAIN = 'cod-cheats.net';
export const SITE_URL = 'https://cod-cheats.net';
export const PRODUCT_BASE = '/products/call-of-duty-cheats/';
export const TITLE_PREFIX = 'Call of Duty';

/** Public community invite (external). Single source of truth for UI + FAQ copy—not an affiliate link. */
export const DISCORD_URL = 'https://discord.com/invite/Vu85F8auQS';
