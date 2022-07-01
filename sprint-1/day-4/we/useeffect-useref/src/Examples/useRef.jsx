import { useEffect, useRef } from "react"

import { useState } from "react";


export const InputBox=()=>{
    const inputRef=useRef(new Array(4).fill(0));
 const arr=new Array(4).fill(0);

// useEffect(()=>{
//     console.log(inputRef)
// },[])
 const handleFocus=()=>{
     inputRef.current[0].focus();
 }

 const onChange=(index)=>{
    //  if( inputRef.current[index+1]==null){
    //      return;
    //  }
    inputRef.current[index+1].focus();
 }

 console.log(inputRef)

    return (
        <div>
            <div>
    {/* //ref is the keyword to reference this below dom element & you can pass a react reference or useref into that  */}
    {/* <input ref={inputRef}/> */}

        {arr.map((a,i)=>(

        <input key={i} onChange={()=>onChange(i)}
         ref={(elem)=>(inputRef.current[i]=elem)}
         />
        ))}
            </div>

            <div>
                <button onClick={handleFocus}>
                Focus    
                </button>
            </div>
        </div>
    )
}


export const  Counter=()=>{
const ref=useRef(0);

const [count,setCount] =useState(0)
const handleChange=()=>{
    ref.current+=1;
    console.log(ref.current)
}
return (
    <div>
        <h2>{ref.current}</h2>
        <button onClick={handleChange}>ADD</button>

        <h2>useState -{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>ADD</button>
    </div>
)
}