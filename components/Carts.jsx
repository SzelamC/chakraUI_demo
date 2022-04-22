import {
  VStack,
  Heading,
  Text,
  Box,
  HStack,
  AspectRatio,
  Image,
  Stack,
  Divider,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Carts = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.400");
  return (
    <Box bg={bgColor} display="flex" spacing={10} p={6} w="100%" h="100%">
      <VStack h="100%" spacing={6} p={10} alignItems="flex-start" w="100%">
        <Heading size="2xl">Your cart</Heading>
        <Text>
          If price is too hard on your eyes,
          <Button onClick={toggleColorMode} variant="link" colorScheme="black">
            try changing the theme once haha
          </Button>
        </Text>
        <HStack spacing={6} alignItems="center" w="100%">
          <AspectRatio ration={1} w={24}>
            <Image src="https://github.com/lazarnikolov94/egghead-getting-started-with-chakra-ui/blob/lesson-4/public/images/skateboard.jpg?raw=true"></Image>
          </AspectRatio>
          <Stack
            direction="row"
            w="100%"
            spacing={0}
            alignItems="center"
            justifyContent="space-between"
          >
            <VStack w="100%" spacing={0} alignItems="flex-start">
              <Heading size="md">Penny board</Heading>
              <Text color={secondaryTextColor}>PNYCOMP27541</Text>
            </VStack>
            <Heading size="sm" textAlign="end">
              $119.00
            </Heading>
          </Stack>
        </HStack>
        <VStack spacing={4} alignItems="stretch" w="100%">
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Subtotal</Text>
            <Text color={secondaryTextColor}>$119.00</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Shipping</Text>
            <Text color={secondaryTextColor}>$19.99</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Taxed(estimated)</Text>
            <Text color={secondaryTextColor}>$23.80</Text>
          </HStack>
          <Divider />
          <HStack justifyContent="space-between">
            <Text color={secondaryTextColor}>Total</Text>
            <Heading size="lg">$162.79</Heading>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Carts;
