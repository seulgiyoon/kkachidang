import { Global } from '@emotion/react';
import React, { ReactNode } from 'react';
import { GlobalStyle } from 'styles/Global';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Global styles={GlobalStyle} />
      {children}
    </>
  );
};

export default Layout;
