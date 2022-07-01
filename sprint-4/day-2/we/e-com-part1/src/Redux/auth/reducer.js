import { SIGN_IN_FAILURE,SIGN_IN_SUCCESS,SIGN_IN_REQUEST } from "./action";



const initState={
   auth:false,
   token:"" ,
   error:false
}

export const authReducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case SIGN_IN_REQUEST:{
            return {
                ...state,
                auth:false,
                token:"",
                error:false
            }
        }
        case SIGN_IN_SUCCESS:{
            return {
                ...state,
                auth:true,
                token:payload,
                error:false
            }
        }
        case SIGN_IN_FAILURE:{
            return {
                ...state,
                auth:false,
                token:"",
                error:payload
            }
        }
        default: return state;
    }
}