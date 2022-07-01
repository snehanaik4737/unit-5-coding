import { legacy_createStore as createStore } from "redux";

import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";

import { companyReducer } from "./company/reducer"
import { employeeReducer } from "./employee/reducer";

const rootReducer=combineReducers({
   company:companyReducer,
   employee:employeeReducer
})

const composeEnhancers=  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store =createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )