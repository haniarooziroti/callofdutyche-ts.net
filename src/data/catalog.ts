import { checkoutForSlug } from '../config/checkout';
import { productPages } from './products';
import { productCategoryIcons } from './sectionIcons';
import { productPath } from '../utils/path';
import type { IconName } from '../components/icons/types';

export interface CatalogCardData {
  label: string;
  title: string;
  /** Shorter card headline when product title is long. */
  cardTitle?: string;
  href: string;
  buyUrl: string;
  features: string[];
  more: number;
  icon: IconName;
  badge?: string;
  variant?: 'essential' | 'popular' | 'limited';
  extraBadges?: string[];
}

/** Home + hub grid: main Call of Duty cheat module page plus utility boxes (HWID, UGC, Cloud DMA). */
export function getCatalogCards(): CatalogCardData[] {
  const storefront = productPages.find((p) => p.slug === 'call-of-duty-store');

  const main: CatalogCardData[] = storefront
    ? [
        {
          label: storefront.tier ?? 'Call of Duty',
          title: storefront.title,
          cardTitle: 'Call of Duty cheats',
          href: productPath(storefront.slug),
          buyUrl: storefront.buyUrl,
          features: storefront.features,
          more: storefront.more,
          icon: 'crosshair',
          badge: 'In stock',
          variant: 'popular',
        },
      ]
    : [];

  const utilities: CatalogCardData[] = productPages
    .filter((p) => p.kind === 'utility')
    .map((product) => ({
      label: product.category ?? 'Utility',
      title: product.title,
      href: productPath(product.slug),
      buyUrl: product.buyUrl,
      features: product.features,
      more: product.more,
      icon: productCategoryIcons[product.category ?? ''] ?? 'package',
      badge: 'In stock',
    }));

  return [...main, ...utilities];
}
