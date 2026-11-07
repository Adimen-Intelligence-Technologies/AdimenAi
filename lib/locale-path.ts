import { routing, type AppLocale } from '@/i18n/routing';

function normalizePath(path: string): string {
  if (!path) {
    return '/';
  }

  return path.startsWith('/') ? path : `/${path}`;
}

export function toLocalePath(locale: string, path: string): string {
  const normalizedPath = normalizePath(path);
  const localePrefix = locale === routing.defaultLocale ? '' : `/${locale as AppLocale}`;

  if (normalizedPath === '/') {
    return localePrefix || '/';
  }

  return `${localePrefix}${normalizedPath}`;
}

export function stripLocaleFromPath(pathname: string): string {
  const normalizedPath = normalizePath(pathname);
  const parts = normalizedPath.split('/').filter(Boolean);

  if (parts.length > 0 && routing.locales.includes(parts[0] as AppLocale)) {
    const rest = parts.slice(1).join('/');
    return rest ? `/${rest}` : '/';
  }

  return normalizedPath;
}