import "@fontsource/poppins";
import "@/styles/globals.css";
import { theme } from "@chakra-ui/pro-theme";
import { Box, ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import { useRouter } from "next/router";

import "@fontsource/poppins";

import Head from "next/head";
import { UtilsProvider } from "@/contexts/UtilsContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: any;
  pageProps: any;
}) {
  const proTheme = extendTheme(theme);
  const extenstion = {
    colors: { ...proTheme.colors, brand: proTheme.colors.teal },
  };
  const router = useRouter();
  const myTheme = extendTheme(
    {
      fonts: {
        heading: "Poppins, sans-serif",
        body: "Poppins, sans-serif",
      },
      ...extenstion,
    },
    proTheme
  );

  return (
    <UtilsProvider>
      <Head>
        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '753642966276372');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=753642966276372&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </Head>

      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UtilsProvider>
  );
}
