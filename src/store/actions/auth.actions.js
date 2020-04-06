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

const logout = () => ({
    type: LOG_OUT,
});

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

export const login = (email, password, method) => {
    const body = { email, password, returnSecureToken: true };
    return dispatch => {
        dispatch(loginRequest());
        axios.post(getFirebaseUrl(method), body)
            .then(({ data }) => {
                dispatch(loginSuccess(data));
                checkAuthTimeout(data.expiresIn);
            })
            .catch(({ response }) => {
                dispatch(loginFail(response));
            })
    }
};
