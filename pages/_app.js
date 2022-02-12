import * as Panelbear from "@panelbear/panelbear-js";
import Script from 'next/script'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
   Panelbear.load("I7MDLcEpJEM", { scriptSrc: "/bear.js" });
   return (
      <>
         <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
         />
         <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                  });
               `,
            }}
         />
         <Component {...pageProps} />
      </>
   )
}

export default MyApp
