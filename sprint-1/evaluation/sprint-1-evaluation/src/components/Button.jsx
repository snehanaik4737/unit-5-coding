import { useState } from "react";
import styles from "./Button.module.css";

function Button({ title, onClick, disabled, id }) {
//  console.log("onlick",onClick)
 const[page,setPage]=useState(1);
 const [order,setOrder] =useState("desc");
 

 const [asc,setDes] =useState(false);
function handle(){
  
  if(id==="SORT_BUTTON"){
    setDes(!asc)
    if(order==="desc"){

      setOrder("asc")
    }
    else{
      setOrder("desc")
    }
  return [
    asc,
    order
  ]
  }
  if(id==="PREV" || id==="NEXT"){
    return (
      page
    )
  }
}

  return (

    <button onClick={()=>{onClick(handle())}} id={id} data-testid="button-component" className={styles.button}>
      {/* {title ==="PREV" ?  setPage(page-1): title==="NEXT"? setPage(page+1):1 } */}
    {title}


   
    </button>
   

  );
}

export default Button;
