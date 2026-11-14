import { affiliateLinks } from './affiliate-links.mjs';

/** Internal /go/ paths map to mandatory merchant destinations. */
export const CHECKOUT_URLS = {
  'call-of-duty': affiliateLinks.callOfDuty,
  'cloud-dma': affiliateLinks.cloudDMA,
  'hwid-spoofer': affiliateLinks.hwidSpoofer,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/call-of-duty', CHECKOUT_URLS['call-of-duty']],
  ['/go/call-of-duty/', CHECKOUT_URLS['call-of-duty']],
  ['/go/store', CHECKOUT_URLS['call-of-duty']],
  ['/go/store/', CHECKOUT_URLS['call-of-duty']],
  ['/go/cloud-dma', CHECKOUT_URLS['cloud-dma']],
  ['/go/cloud-dma/', CHECKOUT_URLS['cloud-dma']],
  ['/go/hwid-spoofer', CHECKOUT_URLS['hwid-spoofer']],
  ['/go/hwid-spoofer/', CHECKOUT_URLS['hwid-spoofer']],
]);

export const LEGACY_PRODUCT_REDIRECTS = new Map([
  ['/products/legacy-cheats/', '/products/call-of-duty-cheats/'],
  ['/products/call-of-duty-cheats/lite/', '/products/call-of-duty-cheats/modules/'],
  ['/products/call-of-duty-cheats/pro/', '/products/call-of-duty-cheats/modules/'],
  ['/products/call-of-duty-cheats/elite/', '/products/call-of-duty-cheats/modules/'],
  ['/products/call-of-duty-cheats/call-of-duty-store/', '/products/call-of-duty-cheats/modules/'],
  ['/products/call-of-duty-cheats/call-of-duty-store', '/products/call-of-duty-cheats/modules/'],
  ['/products/call-of-duty-cheats/ugc/', '/products/call-of-duty-cheats/appeals/'],
  ['/products/call-of-duty-cheats/ugc', '/products/call-of-duty-cheats/appeals/'],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}

export function resolveLegacyProductRedirect(pathname) {
  const direct = LEGACY_PRODUCT_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return LEGACY_PRODUCT_REDIRECTS.get(`${pathname}/`) ?? null;
  }
  return null;
}