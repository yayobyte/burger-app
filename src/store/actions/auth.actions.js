import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./actionTypes.actions";
import { API_KEY, FIREBASE_SIGN_UP_AUTH_URL } from "../../config";

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

export const login = (email, password) => {
    const body = { email, password };
    return dispatch => {
        dispatch(loginRequest());
        axios.post(FIREBASE_SIGN_UP_AUTH_URL + API_KEY, body)
            .then(({ data }) => {
                console.log(data);
                dispatch(loginSuccess(data));
            })
            .catch((error) => {
                console.log(error);
                dispatch(loginFail(error));
            })
    }
};
