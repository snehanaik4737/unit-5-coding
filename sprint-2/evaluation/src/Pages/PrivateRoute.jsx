import React from 'react'
import { AuthContext } from '../Context/AuthContext'
import {useContext} from "react"
import { Navigate } from 'react-router-dom';
export const PrivateRoute = ({children}) => {

    const[isAuth] =useContext(AuthContext);


    if(isAuth){
        return children
    }

  return (
   <Navigate to={"/register/one"}></Navigate>
  )
}
