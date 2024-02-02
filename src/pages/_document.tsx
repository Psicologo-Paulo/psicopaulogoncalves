import { GoogleAnalytics } from "@next/third-parties/google";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  /*const id = process.env.ADS == null?"": process.env.ADS;*/

  return (
    <Html className="scroll-smooth" lang="pt-br">
      <Head title="Piscologo Paulo">
        

        <GoogleAnalytics gaId="AW-11485333781" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
