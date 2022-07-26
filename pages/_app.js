import 'styles/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PWAMeta from 'components/PWA';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PWAMeta/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
