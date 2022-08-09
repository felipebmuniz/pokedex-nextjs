import { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [switchTheme, setSwitchTheme] = useState(() => {
    if (window.localStorage.getItem('Theme')) {
      return window.localStorage.getItem('Theme');
    } else {
      window.localStorage.setItem('THEME', 'light');
      return 'light';
    }
  });

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
