// Write code for Registration context



import { createContext, useState } from "react";
import { useReducer } from "react";

export const RegistrationContext =createContext();
const initState={
    name:"",
   data:[]
}

const registrationReducer=(state,action)=>{
    switch(action.type){
         case "store_data":{
             return {
                 ...state,
                
                data:action.payload
             }
         }

       
         case "store_name":{
            return {
                ...state,
                name:action.payload,
               
            }
        }
       
         default :{
             return state;
         }
    }

}
export const  RegistrationContextProvider=({children})=>{
   // const [isAuth,setAuth]=useState(false);

  const [state,dispatch] =useReducer(registrationReducer,initState)
  

    return (
        <RegistrationContext.Provider value={[state,dispatch]}>

            {children}
        </RegistrationContext.Provider>
    )
}