import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { extendTheme } from "@chakra-ui/react";
import ContentWrap from "@root/components/ContentWrap";

const theme = extendTheme({
  fonts: {
    heading: "sans-serif",
    body: "sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "green.100",
        color: "#fff",
        fontFamily: "sans-serif",
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <ContentWrap>
        <Component {...pageProps} />
      </ContentWrap>
    </ChakraProvider>
  );
}
