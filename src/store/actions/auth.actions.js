import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "./actionTypes.actions";
import { getFirebaseUrl } from "../../config";

const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

const loginFail = ({ data }) => ({
    type: LOGIN_FAIL,
    error: data.error,
});

export const logout = () => {
    localStorage.removeItem("idToken");
    localStorage.removeItem("expirationDate");
    return ({
        type: LOG_OUT,
    });
};

const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
};

const loginSuccess = ({ idToken, localId }) => ({
    type: LOGIN_SUCCESS,
    idToken,
    localId,
});

export const checkAuthState = () => {
    return (dispatch) => {
        const token = localStorage.getItem("idToken");
        if (!token) {
            dispatch(logout());
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
            })
            .catch(({ response }) => {
                dispatch(loginFail(response));
            })
    }
};
