import { ChakraProvider } from "@chakra-ui/provider";
import theme from "../styles/theme";
import "../styles/style.css";

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
