import { defineMiddleware } from 'astro:middleware';
import { pickLocaleFromAcceptLanguage, localePath } from './i18n/seo';

function isSiteRoot(pathname: string): boolean {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '';
  if (base) {
    return pathname === base || pathname === `${base}/`;
  }
  return pathname === '/' || pathname === '';
}

export const onRequest = defineMiddleware((context, next) => {
  if (isSiteRoot(context.url.pathname)) {
    const locale = pickLocaleFromAcceptLanguage(context.request.headers.get('accept-language'));
    return context.redirect(localePath(locale));
  }

  return next();
});
