/** Checkout hop attributes — no visible sponsorship labels in UI. */
export const AFFILIATE_REL = 'nofollow noopener';

export const AFFILIATE_DISCLOSURE_SHORT = '';
export const AFFILIATE_DISCLOSURE_LONG = '';

import { affiliateLinks as links } from './affiliate-links.mjs';

/** Mandatory affiliate destinations — do not alter HANIA or URL encoding. */
export const affiliateLinks = links;

export function isAffiliateHref(href: string | undefined): boolean {
  if (!href) return false;
  return href.includes('/go/') || /zadeyo\.com/i.test(href);
}

export function affiliateRel(href: string | undefined): string | undefined {
  return isAffiliateHref(href) ? AFFILIATE_REL : undefined;
}