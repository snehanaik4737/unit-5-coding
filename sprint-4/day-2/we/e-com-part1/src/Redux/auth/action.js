import  Axios  from "axios";

export const SIGN_IN_REQUEST="SIGN_IN_REQUEST";

 export const SIGN_IN_SUCCESS="SIGN_IN_SUCCESS";

 export const SIGN_IN_FAILURE="SIGN_IN_FAILURE";

export const signinRequest=()=>{
    return {
        type:SIGN_IN_REQUEST
    }
}

export const signinSuccess=(payload)=>{
    return {
        type:SIGN_IN_SUCCESS,
        payload,
        
    }
}
export const signinFailure=(payload)=>{
    return {
        type:SIGN_IN_FAILURE,
        payload,
        
    }
}
export const signIn=(payload)=>(dispatch)=>{
   
    dispatch(signinRequest());
    Axios.post("/api/login",payload,{baseURL:"https://reqres.in"})
    .then((r)=>
  
   
    dispatch(signinSuccess(r.data.token)))
    .catch((e)=>dispatch(signinFailure(e)))
}

