import { createContext, useState } from "react";


 export const AuthContext=createContext();


 export const AuthContextProvider=({children})=>{
   
    const [isAuth,setAuth]=useState(false)
    
    function toggleAuth(){
     isAuth===false? setAuth(true) :setAuth(false);
    }

    return <AuthContext.Provider value ={[isAuth,toggleAuth]}>
      {children}
    </AuthContext.Provider>
}