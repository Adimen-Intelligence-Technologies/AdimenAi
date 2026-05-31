import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const locales = routing.locales;

export function generateStaticParams() {
  return locales.map(locale => ({locale}));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  return children;
}