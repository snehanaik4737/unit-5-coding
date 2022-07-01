


import React from 'react'
import { RegistrationContext } from '../Context/RegistrationContextProvider'
import {useContext} from "react"
export const Dashboard = () => {

    const [state,dispatch] =useContext(RegistrationContext);

    console.log(state)
  return (
    <div>
      <div>Name :{state.name.firstName}</div>
        <div>Phone: {state.data.phone}</div>
        <div>Address :{state.data.address}</div>
      
    </div>
  )
}
