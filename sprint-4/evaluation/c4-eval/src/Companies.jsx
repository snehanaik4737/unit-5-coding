import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports'
import { addCompany, fetchCompany } from './Redux/company/action'
import { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Input,
  VStack
  
} from '@chakra-ui/react'
export const Companies = () => {
  const [text,setText]= useState("");
const dispatch=useDispatch()
  const companies=useSelector((store)=>store.company.company);
  console.log(companies,"companies");


  useEffect(()=>{
   dispatch(fetchCompany())
  },[])

  const handleAdd=()=>{
   dispatch(addCompany(text))
  }
  return (

   <VStack>

{/* rightIcon={<ChevronDownIcon />} */}
    <Menu>
    <MenuButton as={Button} >
      Actions
    </MenuButton>
    <MenuList>
      {companies?.map((item)=>(
        <MenuItem key={item.id}>{item.company_name}</MenuItem>
      ))
}
        
   
    </MenuList>
  </Menu>

   <input value ={text}type="text" placeholder='ADD A NEW COMPANY' onChange={(e)=>setText(e.target.value)}></input>
   <button onClick={handleAdd}>ADD</button>
   </VStack>
  )
}
