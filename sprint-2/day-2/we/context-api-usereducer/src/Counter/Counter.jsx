import { useReducer } from "react"

const initState={
    counter:0,
    noOfClicks:0
}

const counterActions={
    increment:"increment",
    decrement:"decrement",
    reset:"reset"
}
const reducer=(state,action)=>{
    switch(action.type){
        case counterActions.increment:{
        return {
            ...state,
            counter:state.counter+1
        }
        }
        case counterActions.decrement:{
            return {
                ...state,
                counter:state.counter-1
            }

        }
        case counterActions.reset:{
            return {

                ...initState
            }
        }
        default :
        return  state;
    }
}

export const Counter=()=>{
    const [state,dispatch]=useReducer(reducer,initState)

    return(
       <div>
           <h2>{state.counter}</h2>
           <div>
               <button onClick={()=>dispatch({
                   type:counterActions.increment
               })}>ADD</button>
               <button onClick={()=>dispatch({
                   type:counterActions.decrement
               })}>REDUCE</button>

<button onClick={()=>dispatch({
                   type:counterActions.reset
               })}>RESET</button>
           </div>
       </div> 
    )
}