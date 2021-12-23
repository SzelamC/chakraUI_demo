import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });
  return (
    <Box display="flex" w="100%" h="100%" p={10} spacing={6}>
      <VStack h="100%" spacing={6} p={10} alignItems="flex-start" w="100%">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account click here to login</Text>
        <SimpleGrid columns={2} columnGap={3} rowGap={6}>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="Sam" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Chan" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input placeholder="The Chinese University of Hong Kong" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Input placeholder="Hong Kong" />
            </FormControl>
          </GridItem>
          <GridItem colSpan={colSpan}>
            <FormControl>
              <FormLabel>Country</FormLabel>
              <Select>
                <option value="YL">Yuen Long</option>
                <option value="ST">Sha Tin</option>
                <option value="TP">Tai Po</option>
                <option value="TST">Tsim Sha Tsui</option>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <Checkbox defaultChecked>Ship to billing address</Checkbox>
          </GridItem>
          <GridItem colSpan={2}>
            <Button size="lg" w="100%" variant="primary">
              Place Order
            </Button>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Details;
