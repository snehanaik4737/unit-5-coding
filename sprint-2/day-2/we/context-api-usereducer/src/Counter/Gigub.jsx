import React, { useEffect, useReducer,useState } from 'react'
import axios from 'axios'
const githubActions={
    fetch:"fetch",
    success:"success",
    failure:"failure"
}

const initState={
    loading:true,
    error:false,
    data:null
}
const githubReducer=(state,action)=>{
switch(action.type){
    case githubActions.fetch:{
        return (
            {
                ...state,
                loading:true,
                error:false,
                data:null

            }
        )
    }
    case githubActions.success:{
        return (
            {
                ...state,
                loading:false,
                error:false,
                data:action.payload
            }
            )
        }
        case githubActions.failure:{
            return (
                {
                    ...state,
                    loading:false,
                    error:true,
                    
                }
                
                )
            }
            default:
                return state
            }
        }
     export const Gigub = () => {
            // const [text,setText]=useState("");
            // const [query,setQuery]=useState("masai")
    const [{
       loading,
       error,
       data 
    },dispatch]=useReducer(githubReducer,initState)

    useEffect(()=>{
        fetchData()
      
    },[])

    const fetchData= async (query)=>{
        dispatch({
            type:githubActions.fetch
        })
       axios({
           
           url:"https://api.github.com/search/users",
           method:"GET",
           params:{
               q:"masai"
           }
       }).then(res=>{
           dispatch({
               type:githubActions.success,
               payload:res.data
           }).catch(err=>{
               dispatch({
                   type:githubActions.failure
               })
           })
       })
    }

    // const handleAdd=()=>{
    //     setQuery(text)
    // }


 console.log(data)
  return (
    <div>

{/* <input type="text" onChange={(e)=>setText(e.target.value)}/>
    <button onClick={handleAdd}>Search</button> */}
{loading && <div>Loading</div>}

{error && <div>Error</div>}

{
    data?.items.map((item)=>(
        <div style={{display:"flex", width:"60%",margin:"auto",border:"1px solid gray",marginBottom:"2%"}} key={item.id}>

            <div style={{marginRight:"50px"}}><img width="100px" height="100px" src={item.avatar_url}></img></div>
            <div > <p  style={{textAlign:"center"}}>{item.login}</p></div>
        </div>

    ))
}

    </div>
  )
}
