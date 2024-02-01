import { Html, Head, Main, NextScript } from "next/document";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

export default function Document() {


  return (
    <Html className="scroll-smooth" lang="pt-br">
      <Head title="Piscologo Paulo">
        <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ADS}`}>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.ADS});`}
        </Script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
