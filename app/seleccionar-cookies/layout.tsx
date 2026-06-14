import { NextIntlClientProvider } from 'next-intl';
import esMessages from '../../messages/es.json';

export default function SeleccionarCookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextIntlClientProvider locale="es" messages={esMessages}>
      {children}
    </NextIntlClientProvider>
  );
}
