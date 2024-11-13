import { Html, Head, Main, NextScript } from "next/document";
import { GoogleAnalytics } from '@next/third-parties/google'


export default function Document() {
  return (
    <Html className='scroll-smooth' lang='en'>
      <Head />
      <body className='md:overflow-visible'>
      <GoogleAnalytics gaId="G-5959LR2BB0" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
