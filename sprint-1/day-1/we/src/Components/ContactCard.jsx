import { useState } from 'react'

 export const ContactCard=({id,name,phone,onDelete})=>{
  
  return(
    <div style={{display:"flex",padding:"1rem",border:"1px solid black",marginBottom:"0.25rem",gap:"1rem"}}>
   <div>
    {name} {" "} {phone}

   </div>
    <button onClick={()=>onDelete(id)}>DELETE</button>
    </div>
  )
}


