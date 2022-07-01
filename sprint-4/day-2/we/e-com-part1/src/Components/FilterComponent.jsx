import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/products/action'
import { useDispatch } from 'react-redux'
export const FilterComponent = () => {
  const dispatch=useDispatch()
const [searchParams,setSearchParams]=useSearchParams();
  const [categoryValues,setCategoryValues]=useState(searchParams.getAll("category")|| [])
  const categoryHandler=(values)=>{
    
    setCategoryValues(values)
  
  }
  console.log(categoryValues)

  useEffect(()=>{
if(categoryValues){
  setSearchParams({category:categoryValues},{replace:true})
  let params={
    category:searchParams.getAll("category")
  }
  dispatch(fetchData(params))
}
  },[categoryValues,setSearchParams,searchParams,dispatch])
  return (
   <Box>
     <Box display={{base:"none",md:"block"}} p="1rem 2rem">
       <Text fontSize="2xl">Filters</Text>
       <Text>Category</Text>

       <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"} >
    <Checkbox value="men's clothing">Men's clothing</Checkbox>
    <Checkbox value= "women's clothing">Women's clothing</Checkbox>
    <Checkbox value='jewelery'>Jewelery</Checkbox>
    <Checkbox value='electronics'>Electronics</Checkbox>
    <Checkbox value='bags'>Bags</Checkbox>
  </VStack>
</CheckboxGroup>
     </Box>
     <Box display={{base:"bloack",md:"none"}} p="0rem 2rem">
     <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
     </Box>
   </Box>
  )
}
