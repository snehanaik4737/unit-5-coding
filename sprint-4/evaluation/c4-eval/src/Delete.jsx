import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useColorModeValue,
    useDisclosure,
    Box,
  Flex,
  Image,
  Text,
    Button,
  } from "@chakra-ui/react";
  
  export const Delete = ({employee}) => {
   // console.log("emp",employee)
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <Box>
        <Button
          rounded={"none"}
          w={"full"}
          mt={8}
          size={"lg"}
          py={"7"}
          bg={useColorModeValue("gray.900", "gray.50")}
          color={useColorModeValue("white", "gray.900")}
          textTransform={"uppercase"}
          _hover={{
            transform: "translateY(2px)",
            boxShadow: "lg",
          }}
          onClick={onOpen}
        >
        DELETE
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  w="50%" h="100px" display={"flex"} margin='auto' >
            <ModalHeader>Confirm Delete</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
             
                  <Box  mb='1rem' >
                    <Flex display={'flex'} p={4} margin="auto"  w={"80%"}>
                      {/* <Box>
                        <Image
                        border={'1px solid black'}
                        rounded='lg'
                          src={product.image}
                          objectFit={"contain"}
                          alt="product image"
                          boxSize={"100px"}
                        />
                      </Box> */}
                      <Box maxW={'250px'} ml='1rem' border={"1px solid black"}>
                          <Text fontSize={"lg"}> EMPLOYEEE NAME: {employee.name}</Text>
                      </Box>
                      <Box maxW={'250px'} ml='1rem'  border={"1px solid black"}>
                          <Text fontSize={"lg"}>COMPANY NAME: {employee.company_name}</Text>
                      </Box>
                      <Box maxW={'250px'} ml='1rem'  border={"1px solid black"}>
                          <Text fontSize={"lg"}> CTC: {employee.ctc}</Text>
                      </Box>
                    </Flex>
                  </Box>
             
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" mr={3} >
               Confirm
              </Button>
             
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    );
  };
  