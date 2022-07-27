import 'styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloProvider} from '@apollo/client'
import PWAMeta from 'components/PWA';
import { useApollo } from 'server/client';
import SSRProvider from 'react-bootstrap/SSRProvider';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps)

  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <PWAMeta/>
        <SSRProvider>
          <NextNProgress/>
          <Component {...pageProps} />
        </SSRProvider>
      </ApolloProvider>
    </div>
  )
}

export default MyApp
