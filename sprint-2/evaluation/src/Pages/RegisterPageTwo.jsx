
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useContext,useState} from "react"
import { AuthContext } from '../Context/AuthContext'
import { RegistrationContext } from '../Context/RegistrationContextProvider'
export const RegisterPageTwo = () => {

    const[isAuth,toggleAuth]=useContext(AuthContext);

    const [state,dispatch] =useContext(RegistrationContext);
   // console.log(state)

    const [phone,setPhone] =useState("");
    const [address,setAddress]=useState("")
console.log(isAuth)

const navigate =useNavigate()
    const handleback=()=>{
  navigate("/register/one")
    }

    const handlenext=()=>{
        dispatch({
            type:"store_data",
            payload:{
                phone,
                address
            }
        })
    navigate("/dashboard")
    }
  return (
    <div>   <input  value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder="enter mobile no" id="number"/>

  <input  value={address} onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="enter address" id="address"/>
  <button onClick={handleback}>Prev</button>
  <button onClick={handlenext}>Submit</button>

    </div>
  )
}
