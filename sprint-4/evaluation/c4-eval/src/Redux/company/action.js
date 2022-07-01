import axios from "axios";
import * as types from "./actionTypes"


const fetchCompanyRequest = (payload) => {
    return {
      type: types.FETCH_COMPANY_REQUEST,
      payload: payload,
    };
  };
  const fetchCompanySuccess = (payload) => {
    return {
      type: types.FETCH_COMPANY_SUCCESS,
      payload: payload,
    };
  };
  
  const fetchCompanyFailure = (payload) => {
    return {
      type: types.FETCH_COMPANY_FAILURE,
      payload: payload,
    };
  };
  

  const fetchCompany =()=>(dispatch)=>{
    dispatch(fetchCompanyRequest());
    axios({
        url:"http://localhost:8080/company",
        method:"GET"
    })
    .then((r)=>
    dispatch(fetchCompanySuccess(r.data))
    )
    .catch((e)=>dispatch(fetchCompanyFailure(e.data)))
  }




  const addCompanyRequest = (payload) => {
    return {
      type: types.COMPANY_ADD_REQUEST,
      payload: payload,
    };
  };
  const addCompanySuccess = (payload) => {
    return {
      type: types.COMPANY_ADD_SUCCESS,
      payload: payload,
    };
  };
  
  const addCompanyFailure = (payload) => {
    return {
      type: types.FETCH_COMPANY_FAILURE,
      payload: payload,
    };
  };
  

  const addCompany =(company)=>(dispatch)=>{
    console.log(company,"companyreduc")
    dispatch(addCompanyRequest());
    axios({
        url:"http://localhost:8080/company",
        method:"POST",
        data:{
          company_name:company 
             
        }
    })
    .then((r)=>
    dispatch(addCompanySuccess(r.data))
    )
    .then(()=>dispatch(fetchCompany()))
    .catch((e)=>dispatch(addCompanyFailure(e.data)))
  }

  export {fetchCompany,addCompany}