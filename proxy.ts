import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['es', 'en', 'eu'],
  defaultLocale: 'es',
  localePrefix: 'always',
});

export const config = {
  matcher: ['/', '/(es|en|eu)/:path*'],
};