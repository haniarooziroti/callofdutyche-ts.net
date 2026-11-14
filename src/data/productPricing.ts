/**
 * Single source of truth for visible prices and Product JSON-LD offers.
 * Update plans here when store pricing changes — not in components or schema helpers.
 */
import { checkoutPath } from '../config/checkout';

export type ProductPlanId = 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  billing: string;
  /** Plain number string for Schema.org Offer.price (e.g. "35.00"). */
  price: string;
  priceUsd: number;
  priceCurrency: string;
  priceNote: string;
  priceValidUntil?: string;
  /** Schema.org availability URL */
  availability: string;
  buyUrl: string;
}

const storeCheckout = checkoutPath('call-of-duty');

const standardPlans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly',
    billing: 'monthly',
    price: '35.00',
    priceUsd: 35,
    priceCurrency: 'USD',
    priceNote: 'USD / month',
    priceValidUntil: '2030-12-31',
    availability: 'https://schema.org/InStock',
    buyUrl: `${storeCheckout}?plan=monthly`,
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    billing: 'lifetime',
    price: '150.00',
    priceUsd: 150,
    priceCurrency: 'USD',
    priceNote: 'USD · one-time',
    priceValidUntil: '2030-12-31',
    availability: 'https://schema.org/InStock',
    buyUrl: `${storeCheckout}?plan=lifetime`,
  },
];

const ugcPlans: ProductPlan[] = [
  {
    id: 'onetime',
    label: 'One-time access',
    billing: 'onetime',
    price: '50.00',
    priceUsd: 50,
    priceCurrency: 'USD',
    priceNote: 'USD · one-time',
    priceValidUntil: '2030-12-31',
    availability: 'https://schema.org/InStock',
    buyUrl: `${storeCheckout}?plan=onetime`,
  },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'appeals') return ugcPlans;
  return standardPlans;
}

export function formatPlanPrice(usd: number): string {
  return `$${usd}`;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}
