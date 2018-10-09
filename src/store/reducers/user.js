import { AuthActionTypes } from "../actions/auth";

export default function userReducer (state = null, action) {
    
    switch (action.type) {
        case AuthActionTypes.login_success:
            return { ...action.payload, errorMessage: null }
        case AuthActionTypes.login_error:
            return { errorMessage: action.payload }
        case AuthActionTypes.logout:
            return null;
        default:
            return state;
    }
}