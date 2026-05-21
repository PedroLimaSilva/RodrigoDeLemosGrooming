export const LOCALE_STORAGE_KEY = 'candoro-site-locale';

export type SiteLocale = 'en' | 'pt';

export const SITE_LOCALES: SiteLocale[] = ['en', 'pt'];

export function isSiteLocale(value: string | null | undefined): value is SiteLocale {
  return value === 'en' || value === 'pt';
}
