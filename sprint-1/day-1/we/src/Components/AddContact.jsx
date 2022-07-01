import { useState } from 'react'




 export const AddContact=(props)=>{
  const [text,setText] =useState("")
  const [phone,setPhone] =useState("")
  console.log(props,".....")

 const handleClick=()=>{
 
  if(props.handleClick) props.handleClick(text,phone);
  setText("");
  setPhone("");
  }
  return (
    <div>
      <input placeholder='Add Name' value={text} onChange={(e)=>setText(e.target.value)}></input>
      <input placeholder='Add phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}></input>
    
     <div>

      <button onClick={handleClick}>Add</button>
     </div>
    </div>
  )
}



