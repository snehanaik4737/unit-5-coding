
import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext';

export const Home = () => {

    const [state,toggleTheme]=useContext(ThemeContext);
    console.log("state",state)
  return (
    <div style={{display:"flex",background:`${state === "dark"? "black":"white"}`,margin:"auto",width:"60%",height:"600px",border:"1px solid gray"}}>

     
     <div style={{
         height:"300px",
         width:"50%",
         margin:"auto",
         border:"1px solid black",
         background:`${state === "dark"? "white":"black"}`,
         color:`${state === "dark"? "black":"white"}`,
        }}>
    Hello India
       
        </div>
   
    </div>
  )
}
