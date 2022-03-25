
import * as actionTypes from "./types";
import { combineReducers } from "redux";

const initial_ins_state = {
    authStatus: false,
    details: {},
    isUserLoggedIn: false,
    isAdminLoggedIn: false,
    isStoreLoggedIn:false
}


const ins_reducer = (state = initial_ins_state, action) => {
    switch (action.type) {
        case actionTypes.SET_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload.authStatus,
            }
        case actionTypes.SET_ADMIN_DETAILS:
            return {
                ...state,
                details: action.payload.details,
                isAdminLoggedIn: true,
                isUserLoggedIn:false,
                isStoreLoggedIn:false
            }
        case actionTypes.SET_USER_DETAILS:
            return {
                ...state,
                details: action.payload.details,
                isUserLoggedIn: true,
                isAdminLoggedIn: false,
                isStoreLoggedIn:false
            }
        case actionTypes.SET_STORE_DETAILS:
            return {
                ...state,
                details: action.payload.details,
                isUserLoggedIn: false,
                isAdminLoggedIn: false,
                isStoreLoggedIn:true
            }
        default: return state
    }
}





const rootReducer = combineReducers({
    ins: ins_reducer
})


export default rootReducer