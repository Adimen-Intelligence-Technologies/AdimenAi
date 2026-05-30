import { NextIntlClientProvider } from 'next-intl';
import { ChromeLayout } from '../components/ChromeLayout';
import esMessages from '../../messages/es.json';

export default function SeleccionarCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale="es" messages={esMessages}>
      <ChromeLayout>{children}</ChromeLayout>
    </NextIntlClientProvider>
  );
}
