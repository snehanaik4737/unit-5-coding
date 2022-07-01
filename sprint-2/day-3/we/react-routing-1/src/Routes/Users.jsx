import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
export const Users = () => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(true);

    const [state] =useContext(AuthContext);
    let [searchParams ,setSearchParams] =useSearchParams()
    const [page,setPage]=useState(Number(searchParams.get("page")||1));
 useEffect(()=>{
     setLoading(true);
   
   axios({
       url:"https://reqres.in/api/users",
       method:"GET",
       params:{
        page
       }

   }).then((res)=>{

       console.log(res,"res")
       setData(res.data);
       setLoading(false);
       setError(false)

   }).catch((err)=>{
       setLoading(false);
       setError(true);
   })
 },[page])
 

 useEffect(()=>{
  setSearchParams({
     page
   })
 },[page,setSearchParams])
console.log(data)
  return (
    <div>
      {state.token && <h3>Token :{state.token}</h3>}
        {loading && <div>loading</div>}
        {error && <div>error</div>}
        <div>
          <button disabled={page==1} onClick={()=>setPage(page-1)}>PREV</button>
          <button disabled={page===data?.total_pages} onClick={()=>setPage(page+1)}>NEXT</button>
        </div>
   
   {data?.data?.map((item)=>(
     <div key={item.id}>
         <div>{item.first_name}</div>
         <div>{item.email}</div>
         <div>

         <Link to={`/users/${item.id}`}>See more</Link>
      
         </div>
     </div>
   ))}
    </div>
   
  )
}
