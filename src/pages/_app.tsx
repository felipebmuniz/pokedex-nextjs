import { AppProps } from 'next/app';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { getStorageTheme } from '../styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [switchTheme, setSwitchTheme] = useState<string | null>();

  useEffect(() => {
    let store;
    if (window.localStorage.getItem('THEME')) {
      store = window?.localStorage?.getItem('THEME');
      setSwitchTheme(store);
    } else {
      window.localStorage.setItem('THEME', 'light');
      setSwitchTheme('light');
    }
  }, []);

  useEffect(() => {
    console.log('Aqui');
  }, [switchTheme]);

  return (
    <>
      <ThemeProvider theme={() => getStorageTheme(switchTheme)}>
        <button
          onClick={() => {
            if (switchTheme == 'light') {
              window.localStorage.setItem('THEME', 'dark');
              setSwitchTheme('dark');
            } else if (switchTheme == 'dark') {
              window.localStorage.setItem('THEME', 'light');
              setSwitchTheme('light');
            }
          }}
        >
          {' '}
          Troca de Theme
        </button>
        <GlobalStyle />
        <Component {...pageProps} setSwitchTheme={setSwitchTheme} />
      </ThemeProvider>
    </>
  );
}
