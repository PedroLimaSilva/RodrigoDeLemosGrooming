import type { SiteLocale } from './constants';

/** Canonical site origin — must match astro.config.mjs `site`. */
export const SITE_ORIGIN = 'https://candoro.pt';

export const BUSINESS = {
  name: "CAN D'ORO",
  legalName: "CAN D'ORO — Dog Salon & Boutique",
  phone: '+351935871091',
  phoneDisplay: '+351 935 871 091',
  email: undefined as string | undefined,
  instagram: 'https://www.instagram.com/candoro_salon',
  whatsapp: 'https://api.whatsapp.com/send?phone=+351935871091',
  /** Update with full street address when available for local SEO. */
  address: {
    streetAddress: 'Lisboa',
    addressLocality: 'Lisboa',
    addressRegion: 'Lisboa',
    postalCode: '',
    addressCountry: 'PT',
  },
  geo: {
    latitude: 38.7223,
    longitude: -9.1393,
  },
  priceRange: '€€',
  areaServed: ['Lisboa', 'Lisbon', 'Portugal'],
} as const;

export function localePath(locale: SiteLocale): string {
  return locale === 'pt' ? '/pt/' : '/en/';
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function alternateUrls(currentPath: string): Record<SiteLocale, string> {
  return {
    en: absoluteUrl('/en/'),
    pt: absoluteUrl('/pt/'),
  };
}

export const OG_IMAGE = absoluteUrl('/img/rodrigo_hero.webp');
