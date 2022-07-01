import React from 'react';
import {useState,useContext} from "react"
//import { useState } from 'react/cjs/react.production.min';
import validator from "validator";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import { RegistrationContext } from '../Context/RegistrationContextProvider';

export const RegisterPageOne = () => {

    const [isAuth,toggleAuth] =useContext(AuthContext);
    const [state,dispatch] =useContext(RegistrationContext);
    console.log(state)
   console.log(isAuth)

    const [emailError, setEmailError] =useState("")
    const [email,setEmail] =useState(false);
  const[firstName,setFirstName] =useState("");
console.log(firstName,"name");

    
const navigate=useNavigate();
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email');
        setEmail(true)
      } else {
        setEmailError('Enter valid Email!')
      }
    }


    
    const handle=()=>{
      if(email){
      toggleAuth()
      dispatch({
         type:"store_name",
       payload:{
         firstName
       }
         
         
     })
      navigate("/register/two",{replace:true})
   }
    }
  return (
    <div>
      
         <input  value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder='enter name' required ></input>
        <input  type="text" id="userEmail" 
          onChange={(e) => validateEmail(e)}></input> <br />
          <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{emailError}</span>
       <button onClick={handle}>Next</button>
      </div>
  )
}
