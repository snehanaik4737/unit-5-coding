import {useEffect, useRef,useState } from "react";

 export const ChatAppUseRef=()=>{
    const [user,setUser] =useState("albert");
    const [text,setText] =useState("");

    const subscribeRef=useRef(null)
  
  const handleUpdate=()=>{
    setUser(text);
  }
   function subscribe(user){
     console.log(`listening to ${user}`);
  
     const id=setInterval(()=>{
       console.log(`checking messages from ${user}`);
  
     },3000);
  
     return ()=>{
         console.log(`unsubscribing user ${user}`)
       clearInterval(id);
     }
   }
  
   useEffect(()=>{
     //subscription happens
      subscribeRef.current=subscribe(user);;
     //cleanup
     return()=>{
      
       subscribeRef.current();

     }
   },[user])
  
  return (
    <div>
      <input onChange={(e)=>setText(e.target.value)} type="text" value={text}></input>
  
      <button onClick={handleUpdate}>Update</button>

      <h3>Listening to {user}</h3>

      <div>
          <button onClick={()=>subscribeRef.current()}>unsubscribe</button>
      </div>
    </div>
  )
  
  }