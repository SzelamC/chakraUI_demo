import Carts from "../components/Carts";
import Details from "../components/Details";
const { Container, Flex, Box } = require("@chakra-ui/react");

const IndexPage = () => {
  return (
    <Container h="100vh" maxW="container.xl" p={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={{ base: "0", sm: "10", md: "20" }}
        w="100%"
        alignItems="center"
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <Carts />
      </Flex>
    </Container>
  );
};

export default IndexPage;
