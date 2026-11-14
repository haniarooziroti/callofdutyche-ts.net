/**
 * Checkout helpers — plan prices live on the external store only.
 */
import { checkoutPath } from '../config/checkout';

export type ProductPlanId = 'monthly' | 'lifetime' | 'onetime';

export interface ProductPlan {
  id: ProductPlanId;
  label: string;
  billing: string;
  priceNote: string;
  buyUrl: string;
}

const storeCheckout = checkoutPath('call-of-duty');

const standardPlans: ProductPlan[] = [
  {
    id: 'monthly',
    label: 'Monthly',
    billing: 'monthly',
    priceNote: 'See checkout for current plan options',
    buyUrl: `${storeCheckout}?plan=monthly`,
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    billing: 'lifetime',
    priceNote: 'See checkout for current plan options',
    buyUrl: `${storeCheckout}?plan=lifetime`,
  },
];

const ugcPlans: ProductPlan[] = [
  {
    id: 'onetime',
    label: 'One-time access',
    billing: 'onetime',
    priceNote: 'See checkout for current plan options',
    buyUrl: `${storeCheckout}?plan=onetime`,
  },
];

export function getProductPlans(productSlug: string): ProductPlan[] {
  if (productSlug === 'appeals') return ugcPlans;
  return standardPlans;
}

export function checkoutUrlWithPlan(baseUrl: string, planId: ProductPlanId): string {
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}plan=${planId}`;
}