import { ReactNode } from 'react';
import { Providers } from '@/redux/provider';
import '@/styles/globals.css';

interface IProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Next-fit',
  description: 'Next generation fitness application',
};

const RootLayout = ({ children }: IProps) => (
  <html lang='en'>
  <body>
  <main>
    <Providers>
      {children}
    </Providers>
  </main>
  </body>
  </html>
);

export default RootLayout;

