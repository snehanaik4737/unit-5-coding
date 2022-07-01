import { Box, Center, Heading, Stack ,Flex,Text, useColorModeValue,Image} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FilterComponent } from '../Components/FilterComponent'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from "../Redux/products/action"
import { useSearchParams } from 'react-router-dom'
import { ProductSimple } from '../Components/ProductSimple'
import { Link } from "react-router-dom"
export const Products = () => {
const dispatch=useDispatch();
const [searchParams]=useSearchParams()

const products=useSelector((store)=>store.ecommerceData.products)

  useEffect(()=>{
    if(products?.length===0){
      let params={
        category:searchParams.getAll("category")
      }
      dispatch(fetchData(params))

    }
  },[dispatch,products?.length,searchParams])

  console.log(products)
  return (
   
    <Box>
      <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

      <Box minWidth={"15rem"}>
        <FilterComponent/>
      </Box>
      <Box>
        <Heading as="h3">Products</Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">

          {products.map((product)=>(

            <Link key ={product.id} to={`/products/${product.id}`}> 
          <ProductSimple  key ={product.id} image={product.image} title={product.title} price={product.price}/>
          </Link>
          )
 
          )}
        </Flex>
 

      </Box>
      </Stack>
    </Box>
  )
}

 