
import React, { useState } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Box
  } from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { addEmployee } from './Redux/employee/action';
 
 export const InitialFocus=()=> {
    const dispatch=useDispatch()
    const [name,setName] =useState("");
    const [company,setcompany]=useState("")
   const [ctc,setCtc] =useState(0)

    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  

    const handleName=(e)=>{
        setName(e.target.value);
    }
    const handleCompany=(e)=>{
        setcompany(e.target.value);
    }
    const handleCTC=(e)=>{
        setCtc(e.target.value);
    }
    const handleDetails=(e)=>{
   e.preventDefault();
   dispatch(addEmployee({name,company,ctc}))
    
    }
    return (
     <Box >
        <Button onClick={onOpen}>ADD EMPLOYEE</Button>
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}
     
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          w="50%" h="100px"
        >
          <ModalOverlay   />
          <Stack>
            <form onSubmit={handleDetails}>
          <ModalContent  w="50%" h="100px" display={"flex"} margin='auto' >
            <ModalHeader>Add details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
           
              <FormControl>
                <FormLabel>Employee Name</FormLabel>
                <Input ref={initialRef} placeholder='employee name' type="text" value={name} onChange={handleName} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Company name</FormLabel>
                <Input placeholder='company name' type='text' value={company} onChange={handleCompany} />
              </FormControl>
              <FormControl>
                <FormLabel>CTC</FormLabel>
                <Input ref={initialRef} placeholder='enter ctc' type='text' value={ctc} onChange={handleCTC} />
              </FormControl>
            </ModalBody>
           
           
            <ModalFooter>
              <Button colorScheme='blue' mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
          </form>
            </Stack>
        </Modal>
      
        </Box>
    )
  }