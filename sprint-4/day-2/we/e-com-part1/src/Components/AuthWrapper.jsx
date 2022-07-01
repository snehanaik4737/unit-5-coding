import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,useLocation} from "react-router-dom"
export const AuthWrapper = ({children}) => {
   const auth =useSelector((store)=>store.auth.auth);
   const location =useLocation();
   console.log(auth); 
   if(auth){
    return children
   }
  return (
   <Navigate to="/login" state={location} replace={true}></Navigate>
  )
}
