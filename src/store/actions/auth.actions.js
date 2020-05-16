import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "./actionTypes.actions";

import {
    setSuccessMessage,
    setErrorMessages,
} from "./userMessages.actions"

import { getFirebaseUrl } from "../../config";

const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

const loginFail = ({ data }) => ({
    type: LOGIN_FAIL,
    error: data.error,
});

const logoutAction = () => {
    return ({
        type: LOG_OUT,
    });
};

const loginSuccess = ({ idToken, localId }) => ({
    type: LOGIN_SUCCESS,
    idToken,
    localId,
});

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("idToken");
        localStorage.removeItem("expirationDate");
        dispatch(logoutAction());
        dispatch(setSuccessMessage("Logout Successful"));
    }
};

const silentLogout = () => {
    return (dispatch) => {
        localStorage.removeItem("idToken");
        localStorage.removeItem("expirationDate");
        dispatch(logoutAction());
    }
};

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
};

export const checkAuthState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("idToken");
        if (!token) {
            dispatch(silentLogout());
        } else {
            const expirationTime = new Date(localStorage.getItem("expirationDate"));
            if (expirationTime < new Date()){
                dispatch(logout());
            }else{
                const localId = localStorage.getItem("localId");
                dispatch(loginSuccess({ idToken: token, localId }));
                dispatch(checkAuthTimeout((expirationTime.getTime() - new Date().getTime())/1000));
            }
        }
    };
};

const saveTokenOnLocalStorage = (data) => {
    return () => {
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        localStorage.setItem("idToken", data.idToken);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("localId", data.localId);
    };
};

export const login = (email, password, method) => {
    const body = { email, password, returnSecureToken: true };
    return dispatch => {
        dispatch(loginRequest());
        axios.post(getFirebaseUrl(method), body)
            .then(({ data }) => {
                dispatch(saveTokenOnLocalStorage(data));
                dispatch(loginSuccess(data));
                dispatch(checkAuthTimeout(data.expiresIn));
                dispatch(setSuccessMessage("Login Successful"));
            })
            .catch(({ response }) => {
                dispatch(loginFail(response));
                dispatch(setErrorMessages(response.data && response.data.error));
            })
    }
};

export {
    loginRequest,
    loginFail,
    loginSuccess,
    logoutAction,
    silentLogout,
}
