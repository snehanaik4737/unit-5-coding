import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext'

export const PrivateRoute = ({children,to}) => {
    console.log(children)

    const [state] =useContext(AuthContext);

    if(state.isAuth){
        return children
    }

  return (

      <Navigate to={to || "/login"}/>
  )
    
}
