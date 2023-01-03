import React, { useReducer } from 'react';
import { Inter } from '@next/font/google';

import Header from './Header';

import LocalDataContext from '../../core/context/localData';
import localDataReducer from '../../core/reducers/localData';

export interface LayoutProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

function Layout(props: LayoutProps) {
  const { children } = props || {};

  const [store, dispatch] = useReducer(localDataReducer, {});
  const contextValue = { store, dispatch };

  return (
    <LocalDataContext.Provider value={contextValue}>
      <main className={inter.className}>
        <div className="container">
          <Header />
          {children}
        </div>
      </main>
    </LocalDataContext.Provider>
  );
}

export default Layout;