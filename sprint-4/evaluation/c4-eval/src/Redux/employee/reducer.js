import * as types from "./actionTypes";

const initState = {
 employee:[],
  error: "",
  loading: false,
 
};
export const employeeReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_EMPLOYEE_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_EMPLOYEE_SUCCESS:
      return {
        ...state,
     employee: payload,
        error: "",
        loading: false,
      };
    case types.FETCH_EMPLOYEE_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

      case types.EMPLOYEE_ADD_REQUEST:
        return {
          ...state,
          error: "",
          loading: true,
        };
      case types.EMPLOYEE_ADD_SUCCESS:
        return {
          ...state,
        
          error: "",
          loading: false,
        };
      case types.EMPLOYEE_ADD_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
     
        case types.DELETE_EMPLOYEE_REQUEST:
          return {
            ...state,
            error: "",
            loading: true,
          };
       
        case types.DELETE_EMPLOYEE_FAILURE:
          return {
            ...state,
            loading: false,
            error: payload,
          };

    default:
      return state;
  }
};
