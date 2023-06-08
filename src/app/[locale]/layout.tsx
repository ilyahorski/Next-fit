import React, { ReactNode } from 'react';
import { Providers } from '@/redux/provider';
import { NextIntlClientProvider } from 'next-intl';
import '@/styles/globals.css';

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export const metadata = {
  title: 'Next-fit',
  description: 'Next generation fitness application',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }, { locale: 'ru' }];
}

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../translations/${locale}.json`)).default;
  } catch (error) {
    try {
      messages = (await import(`../../translations/en.json`)).default;
    } catch (error) {
      console.error('Can\'t load translations');
    }
  }

  return (
    <html lang={locale}>
    <body>
    <main>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Providers>
          {children}
        </Providers>
      </NextIntlClientProvider>
    </main>
    </body>
    </html>
  );
}