import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Grid,GridItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export const Products = () => {
const [loading,setLoading] =useState(true);

const[error,setError] =useState(true);
const [data,setData] =useState([]);

useEffect(()=>{
    setLoading(true);
    axios({
  
    url:"http://localhost:8080/products",
    method:"GET",
    }).then(res=>{
        setLoading(false);
        setData(res.data)
    }).catch(err=>{
        setLoading(false);
        setError(true);
    })
},[])
console.log(data)

  return (

  
    <div style={{color:"white"}}>
        {loading && <div>...loding</div>}
        {error && <div>...something went wrong!</div>}

        <Grid bg='black' templateColumns='repeat(3, 1fr)' gap={50} >
       
      {data.map((e,i)=>(
          <div key={e.id} style={{border:"0.5px solid gray",padding:"20px"}}>

  
         <div>{e.title}</div>
         <div>${e.price}</div>
         <div>

         <Link style={{color:"skyblue"}} to={`/products/${e.id}`}>See more details</Link>
      
         </div>

          </div>

      ))}
      </Grid>
 


    </div>
  )
}
