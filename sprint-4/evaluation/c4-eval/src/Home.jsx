import React from 'react'
import { Box, Button,Link, Stack } from '@chakra-ui/react'
import {Link as RouterLink} from "react-router-dom"
export const Home = () => {
  return (
    <Box>
 <h3>HOME PAGE</h3>
    <Stack spacing={4} direction='column' align='center'>
       
   <Link as ={RouterLink} to="/company">
    <Button colorScheme='teal' bg={"teal"} size='md'>
      COMPANIES
    </Button>

   </Link>
   <Link as ={RouterLink} to="/employee">
    <Button colorScheme='teal'  bg={"teal"} size='md'>
    EMPLOYEES
    </Button>
   </Link>
   
  </Stack>
  </Box>
  )
}
