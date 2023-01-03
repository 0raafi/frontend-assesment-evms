import React from 'react';
import { Inter } from '@next/font/google';

export interface LayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ['latin'] });

function Layout(props: LayoutProps) {
  const { children } = props || {};

  return (
    <main className={inter.className}>
      <div className="container">
        {children}
      </div>
    </main>
  );
}

export default Layout;