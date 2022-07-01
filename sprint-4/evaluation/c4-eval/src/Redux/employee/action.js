import axios from "axios";
import * as types from "./actionTypes"


const fetchEmployeeRequest = (payload) => {
    return {
      type: types.FETCH_EMPLOYEE_REQUEST,
      payload: payload,
    };
  };
  const fetchEmployeeSuccess = (payload) => {
    return {
      type: types.FETCH_EMPLOYEE_SUCCESS,
      payload: payload,
    };
  };
  
  const fetchEmployeeFailure = (payload) => {
    return {
      type: types.FETCH_EMPLOYEE_FAILURE,
      payload: payload,
    };
  };
  

  const fetchEmployee =()=>(dispatch)=>{
    dispatch(fetchEmployeeRequest());
    axios({
        url:"http://localhost:8080/employee",
        method:"GET"
    })
    .then((r)=>
    dispatch(fetchEmployeeSuccess(r.data))
    )
    .catch((e)=>dispatch(fetchEmployeeFailure(e.data)))
  }




  const addEmployeeRequest = (payload) => {
    return {
      type: types.EMPLOYEE_ADD_REQUEST,
      payload: payload,
    };
  };
  const addEmployeeSuccess = (payload) => {
    return {
      type: types.EMPLOYEE_ADD_SUCCESS,
      payload: payload,
    };
  };
  
  const addEmployeeFailure = (payload) => {
    return {
      type: types.EMPLOYEE_ADD_FAILURE,
      payload: payload,
    };
  };
  

  const addEmployee =(payload)=>(dispatch)=>{
  const {name,company,ctc} =payload
   // console.log(company,"companyreduc")
    dispatch(addEmployeeRequest());
    axios({
        url:"http://localhost:8080/employee",
        method:"POST",
        data:{
          employee_name:name,
          company_name:company,
          ctc:ctc
        }
    })
    .then((r)=>
    dispatch(addEmployeeSuccess(r.data))
    )
    .then(()=>dispatch(fetchEmployee()))
    .catch((e)=>dispatch(addEmployeeFailure(e.data)))
  }




  const deleteEmployeeRequest = (payload) => {
    return {
      type: types.DELETE_EMPLOYEE_REQUEST,
      payload: payload,
    };
  };
  const deleteEmployeeSuccess = (payload) => {
    return {
      type: types.DELETE_EMPLOYEE_SUCCESS,
      payload: payload,
    };
  };
  
  const deleteEmployeeFailure = (payload) => {
    return {
      type: types.DELETE_EMPLOYEE_FAILURE,
      payload: payload,
    };
  };
  

const deleteEmployee=(id)=>(dispatch)=>{
 dispatch(deleteEmployeeRequest());

 axios.delete(`http://localhost:8080/employee/${id}`)
 .then((r) => dispatch(deleteEmployeeSuccess(r.data)))
 .then(()=>dispatch(fetchEmployee()))
 .catch((e) => dispatch(deleteEmployeeFailure(e.data)));
};



  export {fetchEmployee,addEmployee,deleteEmployee}