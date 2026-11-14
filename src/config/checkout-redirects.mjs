/** Single store destination — buy buttons use internal /go/ paths only. */
const STORE_URL = 'https://zadeyo.com/go/HANIA?to=%2Fproducts%2Fcall-of-duty';

export const CHECKOUT_URLS = {
  'call-of-duty': STORE_URL,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/call-of-duty', CHECKOUT_URLS['call-of-duty']],
  ['/go/call-of-duty/', CHECKOUT_URLS['call-of-duty']],
  ['/go/store', CHECKOUT_URLS['call-of-duty']],
  ['/go/store/', CHECKOUT_URLS['call-of-duty']],
  ['/go/delta-force', CHECKOUT_URLS['call-of-duty']],
  ['/go/delta-force/', CHECKOUT_URLS['call-of-duty']],
]);

export const LEGACY_PRODUCT_REDIRECTS = new Map([
  ['/products/delta-force-cheats/', '/products/call-of-duty-cheats/'],
  ['/products/call-of-duty-cheats/lite/', '/products/call-of-duty-cheats/call-of-duty-store/'],
  ['/products/call-of-duty-cheats/pro/', '/products/call-of-duty-cheats/call-of-duty-store/'],
  ['/products/call-of-duty-cheats/elite/', '/products/call-of-duty-cheats/call-of-duty-store/'],
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
