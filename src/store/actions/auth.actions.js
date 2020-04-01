import instance from "../../server";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
} from "./actionTypes.actions";

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

export const login = (user, password) => {
    const body = { user, password };
    return dispatch => {
        dispatch(loginRequest());
        instance.get("login.json")
            .then(({ data }) => {
                dispatch(loginSuccess(data));
            })
            .catch((error) => {
                dispatch(loginFail(error));
            })
    }
};
