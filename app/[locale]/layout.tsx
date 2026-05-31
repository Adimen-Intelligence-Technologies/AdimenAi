import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ChromeLayout} from '../components/ChromeLayout';

const locales = ['es', 'en', 'eu'];

export function generateStaticParams() {
  return locales.map(locale => ({locale}));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!locales.includes(locale as 'es' | 'en' | 'eu')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ChromeLayout>{children}</ChromeLayout>
    </NextIntlClientProvider>
  );
}