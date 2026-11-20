const envOrigin = (import.meta.env.PUBLIC_SITE_ORIGIN as string | undefined)?.trim();
if (envOrigin && envOrigin.includes('workers.dev')) {
  throw new Error(
    'PUBLIC_SITE_ORIGIN must not contain workers.dev. Use https://callofdutycheats.net for production origin.',
  );
}

export const SITE_DOMAIN = 'callofdutycheats.net';
export const SITE_URL = 'https://callofdutycheats.net';
export const PRODUCT_BASE = '/products/call-of-duty-cheats/';
export const TITLE_PREFIX = 'Call of Duty';
