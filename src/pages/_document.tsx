import { GoogleAnalytics } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  const id = process.env.ADS == null?"": process.env.ADS;

  return (
    <Html className="scroll-smooth" lang="pt-br">
      <Head title="Piscologo Paulo">
        
        <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${id}`}>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${id});`}
        </Script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
