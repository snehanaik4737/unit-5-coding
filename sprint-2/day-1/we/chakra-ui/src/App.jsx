import { useState } from "react";
import { Box, Center,Container, Flex ,Stack,SimpleGrid,Grid,GridItem, ChakraProvider} from "@chakra-ui/react";
import { Github } from "./Github/Github";
function App() {
  const [shrink, setShrink] = useState(false);

  return (
   <ChakraProvider>

    {/* <Box> */}
    <Container>

   
      <Github></Github>
      {/* <Box
        onClick={() => setShrink(!shrink)}
        bg="tomato"
        w="100%"
        p={shrink ? 4 : 8}
        color="white"
      >
        This is the Box
      </Box>
      <Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>
        Button
      </Box>
      <Center bg="tomato" color="white">
        Hello world
      </Center>

      <Container maxW='2xl'>
  There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production
</Container>
<Flex columnGap="1rem">
 <Center border={"1px solid"} borderColor="black" flex ="1">1</Center>
 <Center border={"1px solid"} borderColor="black" flex ="1">1</Center>
 <Center border={"1px solid"} borderColor="black" flex ="1">1</Center>
 <Center border={"1px solid"} borderColor="black" flex ="1">1</Center>
</Flex>
<Stack border={"1px solid"}
//borderColor={["blue","black","green"]}
backgroundColor={{
base:"yellow",
  sm:"blue",
  md:"black",
  lg:"green",
  xl:"red"
}}
w="100%"
spacing={2}
direction={["row","column"]}>
  <Box border={"1px solid"} borderColor="black" >stack 1</Box>
  <Box border={"1px solid"} borderColor="black" >stack 2</Box>
  <Box border={"1px solid"} borderColor="black" >stack 3</Box>

</Stack>
<SimpleGrid columns={{
  base:1,
  sm:2,
  md:3,
  lg:4
}} spacing={10}>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
</SimpleGrid>
<Grid templateColumns='repeat(5, 1fr)' gap={6}>
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
  <GridItem w='100%' h='10' bg='blue.500' />
</Grid> */}
{/* </Box> */}
</Container>
</ChakraProvider>
  );
}

export default App;
