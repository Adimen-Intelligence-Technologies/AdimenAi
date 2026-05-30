import type {Metadata} from 'next';
import {Lato, Inter} from 'next/font/google';
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css';
import {ChromeLayout} from '../components/ChromeLayout';
import {cn} from '@/lib/utils';

const inter = Inter({subsets: ['latin'], variable: '--font-sans'});
const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'AdimenAI',
  description: 'Automatiza tu negocio con AdimenAI, la plataforma de inteligencia artificial que transforma tus datos en decisiones inteligentes. Optimiza procesos, mejora la eficiencia y toma decisiones informadas con nuestras soluciones de IA personalizadas.',
};

const locales = ['es', 'en'];

export function generateStaticParams() {
  return locales.map(locale => ({locale}));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;

  if (!locales.includes(locale as 'es' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={cn('h-full', 'antialiased', lato.variable, 'font-sans', inter.variable)}>
      <body className="min-h-full flex min-h-screen flex-col bg-zinc-50 text-zinc-900 font-sans">
        <NextIntlClientProvider messages={messages}>
          <ChromeLayout>{children}</ChromeLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}