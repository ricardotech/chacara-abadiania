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
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </UtilsProvider>
  );
}
