import { useState } from 'react'



import {ContactCard} from "./ContactCard"
import {AddContact} from "./AddContact"

export const ContactList=()=> {
 
  const initState=[
    {
      id:1,
      first_name:"sneha",
      last_name:"naik",
      phone:"9987264311"
    },

    {id:2,
    first_name:"diya",
  last_name:"naik",
phone:"9782341311"
}

  ];
const handleClick=(name,phone)=>{
  console.log(name,phone,"name")
 setContactList([
   ...contactList,
   {
     id:contactList.length+1,
     first_name:name,
     last_name:"",
     phone:phone
   }
 ])
}

console.log(handleClick,"hiii");

const deleteById=(id)=>{
  setContactList(
    contactList.filter((item)=>item.id!==id)
  )
}
  const [contactList,setContactList] =useState(initState)
  return (
    <div className="App">
      <h1>Contact List</h1>
      <AddContact handleClick={handleClick}/>
      <br></br>
     {contactList.map((item)=>(
       <div key={item.id}>

         <ContactCard id={item.id}name={item.first_name} phone={item.phone} onDelete={deleteById}/>
       </div>
     ))}
    </div>
  )
}




