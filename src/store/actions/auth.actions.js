import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./actionTypes.actions";
import { getFirebaseUrl } from "../../config";

const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

const loginFail = (error) => ({
    type: LOGIN_FAIL,
    error,
});

const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    data,
});

export const login = (email, password, method) => {
    const body = { email, password, returnSecureToken: true };
    return dispatch => {
        dispatch(loginRequest());
        axios.post(getFirebaseUrl(method), body)
            .then(({ data }) => {
                dispatch(loginSuccess(data));
            })
            .catch((error) => {
                dispatch(loginFail(error));
            })
    }
};
