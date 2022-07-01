import { Heading,Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { ProductSimple } from '../Components/ProductSimple'
import { fetchOrder } from '../Redux/products/action'
import { useSelector } from 'react-redux/es/exports'
export const Orders = () => {
const dispatch=useDispatch()

    const orders=useSelector((store)=>store.ecommerceData.order);
    console.log(orders)
    useEffect(()=>{
  dispatch(fetchOrder())
    },[dispatch])
  return (
  <Box>
    <Heading as='h2' size='xl' textAlign={'center'}></Heading>

    <Box>
        {orders?.map(product=>(
            <ProductSimple key={product.id} image={product.image} title={product.title} price = {product.price}/>
        ))}
    </Box>
  </Box>
  )
}
