import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
export const UserPage = () => {

    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(true);
   const {id} =useParams();
// const location=useLocation();
// console.log(location);
// const match=useMatch("/users/:id");
// console.log(match)
 useEffect(()=>{
     setLoading(true)
   axios({
       url:`https://reqres.in/api/users/${id}`,
       method:"GET"

   }).then(res=>{
       setData(res.data.data)
       setLoading(false);
       setError(false)

   }).catch(err=>{
       setLoading(false);
       setError(true);
   })
 },[id])


console.log(data)
  return (
    <div>
        {loading && <div>loading</div>}
        {error && <div>error</div>}
     
  <div>
      <img src={data?.avatar}></img>
      <p>{data?.first_name}{" "}{data?.last_name}</p>
     
    <p>{data?.email}</p>
  </div>
  <button>Go Back</button>

    </div>
   
  )
}
