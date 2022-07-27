// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* PWA meta tag */}
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}