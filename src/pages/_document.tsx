import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import Analytics from "@/components/analytics/analytics";

export default function Document() {

  const id = process.env.ADS == null?"": process.env.ADS;

  return (
    <Html className="scroll-smooth" lang="pt-br">
      <Head title="Piscologo Paulo">
        
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  );
}
