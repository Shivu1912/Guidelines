// src/pages/_app.js
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
