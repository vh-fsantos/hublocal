import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import store  from '../store';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const publicRoutes = ['/', '/register'];
  const isPublicRoute = publicRoutes.includes(router.pathname);
  const isAuthenticated = true;

  if (!isAuthenticated && !isPublicRoute) {
    router.push('/login');
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}