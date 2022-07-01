import { Box, Heading, VStack ,Stack,Center,Image,Text, Skeleton} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export const Github = () => {
const [loading,setLoading]= useState(true);
const [error,setError]=useState(false);

const [data,setData]=useState([])

useEffect(()=>{
    setLoading(true)
    axios({
       url:"https://api.github.com/search/users",
        method:"GET",
        params:{
            q:"masai",
            _page:1,
            per_page:5

        }
    }).then(res=>{
        setData(res.data.items)
        setLoading(false)
    }).catch(err=>{
        setLoading(false);
        setError(true)

    })
},[])

  return (
    <Skeleton isLoaded={!loading}>
  <Box p={2}>
<Heading>Github Search</Heading>
{data?.map(item=>

<GithubUserCard key={item.id} {...item}/>
    )}
  </Box>
  </Skeleton>  
  )
}

const GithubUserCard=({
   avatar_url,
   login,
   html_url 
})=>{

   return (
       <Box>
           <Stack direction="row" boxShadow="lg" p={4}>
               <Center  >
                  <Image w="50px" src={avatar_url}></Image>
               </Center>
           <VStack>
               <Box>
                   <Heading>{login}</Heading>
                   <Text>{html_url}</Text>
                   <Text>Subtitle</Text>
                   <Text>Subtitle</Text>
               </Box>
           </VStack>
           </Stack>
       </Box>
   ) 
}