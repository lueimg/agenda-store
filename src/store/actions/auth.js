import HttpService from "../../shared/services/HttpService";
import { AppActions } from "./app";


export const AuthActionTypes = {
    login: '[AUTH] login fetch',
    login_loading: '[AUTH] login loading',
    login_error: '[AUTH] login error',
    login_success: '[AUTH] login success',
    logout: '[AUTH] logout',
}


const login = (email, password) => async (dispatch) => {
    try {
        const user = await HttpService.login(email, password);
        dispatch({ type: AuthActionTypes.login_success, payload: user})
    } catch ({code, message}) {
        dispatch({ type: AuthActionTypes.login_error, payload: message})
        console.log('🔥 error: ', true);
    }
}

const isUserAuth = () => async (dispatch) => {
    try {
        const user = await HttpService.isUserAuth();
        if (user) {
            dispatch({ type: AuthActionTypes.login_success, payload: user})
        } else {

        }
        dispatch(AppActions.loaded())
    } catch (error) {
        
    }
}

const logout = () => async (dispatch) => {
    try {
        await HttpService.logout();
        dispatch({ type: AuthActionTypes.logout})
    } catch ({code, message}) {
        dispatch({ type: AuthActionTypes.login_error, payload: message})
        console.log('🔥 error: ', true);
    }
}

export const AuthActions = {
    login,
    isUserAuth,
    logout
}