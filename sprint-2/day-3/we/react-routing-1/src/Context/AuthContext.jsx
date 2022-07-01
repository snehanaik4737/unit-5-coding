import { createContext, useState } from "react";
import { useReducer } from "react";

export const AuthContext =createContext();
const initState={
    isAuth:false,
    token:null
}

const authReducer=(state,action)=>{
    switch(action.type){
         case "LOGIN_SUCCESS":{
             return {
                 ...state,
                 isAuth:true,
                 token:action.payload
             }
         }
         case "LOGIN_FAILURE":{
             return {
                 ...state,
                 isAuth:false,
                 token:null
             }
         }
         default :{
             return state;
         }
    }

}
export const  AuthContextProvider=({children})=>{
   // const [isAuth,setAuth]=useState(false);

  const [state,dispatch] =useReducer(authReducer,initState)
  

    return (
        <AuthContext.Provider value={[state,dispatch]}>

            {children}
        </AuthContext.Provider>
    )
}