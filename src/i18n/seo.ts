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
  address: {
    streetAddress: 'Av. Mal. Craveiro Lopes 8C',
    addressLocality: 'Lisboa',
    addressRegion: 'Lisboa',
    postalCode: '1700-284',
    addressCountry: 'PT',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Mal.+Craveiro+Lopes+8C,+1700-284+Lisboa,+Portugal',
  geo: {
    latitude: 38.759708,
    longitude: -9.153581,
  },
  priceRange: '€€',
  areaServed: ['Alvalade', 'Lisboa', 'Lisbon', 'Portugal'],
} as const;

export const ADDRESS_LINES = {
  en: ['Av. Mal. Craveiro Lopes 8C', '1700-284 Lisbon', 'Portugal'],
  pt: ['Av. Mal. Craveiro Lopes 8C', '1700-284 Lisboa', 'Portugal'],
} as const;

function siteRoot(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

export function localePath(locale: SiteLocale, hash?: string): string {
  const path = `${siteRoot()}${locale}/`;
  if (!hash) return path;
  const fragment = hash.startsWith('#') ? hash : `#${hash}`;
  return `${path}${fragment}`;
}

export function localeFromUrl(pathname: string): SiteLocale {
  const baseSegments = (import.meta.env.BASE_URL || '/').split('/').filter(Boolean);
  const segments = pathname.split('/').filter(Boolean);
  const localeSegment = segments[baseSegments.length];
  return localeSegment === 'pt' ? 'pt' : 'en';
}

export function pickLocaleFromAcceptLanguage(acceptLanguage: string | null): SiteLocale {
  if (!acceptLanguage) return 'en';

  const langs = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, qPart] = part.trim().split(';q=');
      return { tag: tag.toLowerCase(), q: qPart ? Number.parseFloat(qPart) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of langs) {
    if (tag === 'pt' || tag.startsWith('pt-')) return 'pt';
    if (tag === 'en' || tag.startsWith('en-')) return 'en';
  }

  return 'en';
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_ORIGIN}${normalized}`;
}

export function alternateUrls(): Record<SiteLocale, string> {
  return {
    en: absoluteUrl('/en/'),
    pt: absoluteUrl('/pt/'),
  };
}

export const OG_IMAGE = absoluteUrl('/img/rodrigo_hero.webp');
