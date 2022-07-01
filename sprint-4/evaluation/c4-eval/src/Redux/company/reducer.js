import * as types from "./actionTypes";

const initState = {
  company:[],
  error: "",
  loading: false,
 
};
export const companyReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_COMPANY_REQUEST:
      return {
        ...state,
        error: "",
        loading: true,
      };
    case types.FETCH_COMPANY_SUCCESS:
      return {
        ...state,
       company: payload,
        error: "",
        loading: false,
      };
    case types.FETCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

      case types.COMPANY_ADD_REQUEST:
        return {
          ...state,
          error: "",
          loading: true,
        };
      case types.COMPANY_ADD_SUCCESS:
        return {
          ...state,
        
          error: "",
          loading: false,
        };
      case types.COMPANY_ADD_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload,
        };
  
     

    default:
      return state;
  }
};
