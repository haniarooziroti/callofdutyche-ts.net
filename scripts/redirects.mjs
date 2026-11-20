import { resolveSiteOrigin } from './site-origin.mjs';

resolveSiteOrigin();

/** Must match PRODUCT_BASE in src/config/site.ts */
const PRODUCT_BASE = '/products/call-of-duty-cheats/';
const productsBase = PRODUCT_BASE.replace(/\/$/, '');
const utilitiesPath = `${productsBase}/utilities/`;
const storePath = `${productsBase}call-of-duty-store/`;

/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/forum', '/forum/'],
  ['/blog', '/forum/'],
  ['/blog/', '/forum/'],
  ['/cheats', PRODUCT_BASE],
  ['/cheats/', PRODUCT_BASE],
  ['/cheats/lite', storePath],
  ['/cheats/lite/', storePath],
  ['/cheats/pro', storePath],
  ['/cheats/pro/', storePath],
  ['/cheats/elite', storePath],
  ['/cheats/elite/', storePath],
  [`${productsBase}/lite`, storePath],
  [`${productsBase}/lite/`, storePath],
  [`${productsBase}/pro`, storePath],
  [`${productsBase}/pro/`, storePath],
  [`${productsBase}/elite`, storePath],
  [`${productsBase}/elite/`, storePath],
  ['/products/cs2-cheats', PRODUCT_BASE],
  ['/products/cs2-cheats/', PRODUCT_BASE],
  [`/products/cs2-cheats/lite`, storePath],
  [`/products/cs2-cheats/lite/`, storePath],
  [`/products/cs2-cheats/pro`, storePath],
  [`/products/cs2-cheats/pro/`, storePath],
  [`/products/cs2-cheats/elite`, storePath],
  [`/products/cs2-cheats/elite/`, storePath],
  [`/products/cs2-cheats/cs2-store`, storePath],
  [`/products/cs2-cheats/cs2-store/`, storePath],
  ['/cheats/compare', '/forum/'],
  ['/cheats/compare/', '/forum/'],
  ['/products/dota-2-cheats/utilities', utilitiesPath],
  ['/products/dota-2-cheats/utilities/', utilitiesPath],
  ['/products/dota-2-cheats', PRODUCT_BASE],
  ['/products/dota-2-cheats/', PRODUCT_BASE],
  ['/products/dota-2-cheats/account-recovery', `${productsBase}ugc/`],
  ['/products/dota-2-cheats/account-recovery/', `${productsBase}ugc/`],
  ['/forum/aimbot-fov-smoothness-ranked-ops', '/forum/cod-forum-aimbot/'],
  ['/forum/aimbot-fov-smoothness-ranked-ops/', '/forum/cod-forum-aimbot/'],
  ['/forum/loader-first-boot-defender-exclusions', '/forum/cod-loader-boot/'],
  ['/forum/loader-first-boot-defender-exclusions/', '/forum/cod-loader-boot/'],
  ['/forum/esp-clutter-night-raids', '/forum/cod-esp-night/'],
  ['/forum/esp-clutter-night-raids/', '/forum/cod-esp-night/'],
  ['/forum/wallhack-skeleton-vs-box-only', '/forum/cod-wallhack-box/'],
  ['/forum/wallhack-skeleton-vs-box-only/', '/forum/cod-wallhack-box/'],
  ['/forum/patch-night-loader-verify-spin', '/forum/cod-patch-loader/'],
  ['/forum/patch-night-loader-verify-spin/', '/forum/cod-patch-loader/'],
  ['/forum/loot-intel-extraction-timing', '/forum/cod-loot-timing/'],
  ['/forum/loot-intel-extraction-timing/', '/forum/cod-loot-timing/'],
  ['/forum/stream-mode-esp-leak-obs', '/forum/cod-stream-leak/'],
  ['/forum/stream-mode-esp-leak-obs/', '/forum/cod-stream-leak/'],
  ['/forum/cloud-dma-worth-single-pc', '/forum/cod-dma-one-pc/'],
  ['/forum/cloud-dma-worth-single-pc/', '/forum/cod-dma-one-pc/'],
  ['/forum/hwid-spoof-before-new-account', '/forum/cod-hwid-account/'],
  ['/forum/hwid-spoof-before-new-account/', '/forum/cod-hwid-account/'],
  ['/forum/trigger-delay-pistol-profile', '/forum/cod-trigger-pistol/'],
  ['/forum/trigger-delay-pistol-profile/', '/forum/cod-trigger-pistol/'],
  ['/forum/lite-vs-full-module-stack', '/forum/cod-lite-vs-full/'],
  ['/forum/lite-vs-full-module-stack/', '/forum/cod-lite-vs-full/'],
  ['/forum/chams-brightness-night-map', '/forum/cod-chams-night/'],
  ['/forum/chams-brightness-night-map/', '/forum/cod-chams-night/'],
  ['/forum/cod-mouse-sensitivity-baseline', '/forum/cod-mouse-sens/'],
  ['/forum/cod-mouse-sensitivity-baseline/', '/forum/cod-mouse-sens/'],
  ['/forum/cod-ranked-play-esp-density', '/forum/cod-ranked-esp/'],
  ['/forum/cod-ranked-play-esp-density/', '/forum/cod-ranked-esp/'],
  ['/forum/cod-config-profile-swap', '/forum/cod-config-swap/'],
  ['/forum/cod-config-profile-swap/', '/forum/cod-config-swap/'],
  ['/forum/cod-checkout-plans', '/forum/cod-checkout/'],
  ['/forum/cod-checkout-plans/', '/forum/cod-checkout/'],
  ['/forum/cod-windows-11-loader-notes', '/forum/cod-win11-loader/'],
  ['/forum/cod-windows-11-loader-notes/', '/forum/cod-win11-loader/'],
  ['/blogs/cod-cheats-free-vs-paid', '/blogs/cod-free-vs-paid/'],
  ['/blogs/cod-cheats-free-vs-paid/', '/blogs/cod-free-vs-paid/'],
  ['/blogs/cod-patch-day-status', '/blogs/cod-patch-day/'],
  ['/blogs/cod-patch-day-status/', '/blogs/cod-patch-day/'],
  ['/blogs/cod-no-recoil-guide', '/blogs/cod-no-recoil/'],
  ['/blogs/cod-no-recoil-guide/', '/blogs/cod-no-recoil/'],
  ['/blogs/cod-wallhack-guide', '/blogs/cod-wallhack/'],
  ['/blogs/cod-wallhack-guide/', '/blogs/cod-wallhack/'],
  ['/blogs/cod-stream-safe-obs', '/blogs/cod-stream-obs/'],
  ['/blogs/cod-stream-safe-obs/', '/blogs/cod-stream-obs/'],
  ['/blogs/cod-cheats-setup', '/blogs/cod-setup/'],
  ['/blogs/cod-cheats-setup/', '/blogs/cod-setup/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
