import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { signIn } from '../Redux/auth/action';
  import { useDispatch, useSelector } from 'react-redux/es/exports';
  import {useNavigate,useLocation} from "react-router-dom"
  export const Login=() =>{
    const navigate=useNavigate();
    const location =useLocation();
  const disptach= useDispatch();
  const auth =useSelector((store)=>store.auth.auth)
    const [userEmail,setUserEmail] =useState("");
    const [userPassword,setUserPassword]=useState("")
 const handleUserEmail=(e)=>{
  setUserEmail(e.target.value)
 }

 const handleUserPassword=(e)=>{
    setUserPassword(e.target.value)
 }


  const submitHandler=(e)=>{
   e.preventDefault();
   console.log(userEmail,userPassword)
    disptach(signIn({email:userEmail,password:userPassword}))
 
  }
  console.log(location,"location")

  useEffect(()=>{
    if(location?.state?.pathname && auth){
      navigate(location.state?.pathname, {replace:true})
    }
  },[location?.state?.pathname,navigate,auth])
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            
            <Stack spacing={4}>
            <form onSubmit={submitHandler}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value ={userEmail}onChange={handleUserEmail} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" value={userPassword} onChange={handleUserPassword} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                  >
                  Sign in
                </Button>
              </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }