import 'styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloProvider} from '@apollo/client'
import PWAMeta from 'components/PWA';
import { useApollo } from 'server/client';
import SSRProvider from 'react-bootstrap/SSRProvider';
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';

import { lightTheme, darkTheme, GlobalStyles } from "constants/theme.js" 
import Button from 'react-bootstrap/Button'

import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
// import Layout from 'components/PerPageLayout';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)
  const [theme, setTheme] = useState("light") 

  useEffect(() =>{
    const theme = localStorage.getItem('theme') ?? 'light' 
    setTheme(theme)
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme == 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <PWAMeta/>
          <SSRProvider>
            <NextNProgress/>
            <ThemeProvider  theme={theme == 'light' ? lightTheme : darkTheme}>
              <GlobalStyles/>
              <Button onClick={toggleTheme}>Switch Theme</Button>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </SSRProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
