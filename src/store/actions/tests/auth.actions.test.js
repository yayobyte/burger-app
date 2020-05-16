import axios from "axios";
import { setSuccessMessage } from "../userMessages.actions";
import {
    loginRequest,
    loginFail,
    loginSuccess,
    logoutAction,
    logout,
    checkAuthState,
    login,
} from "../auth.actions";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "../actionTypes.actions";

jest.mock("axios");

describe("Auth Actions", () => {
    it("Should return login request action", () => {
        const action = loginRequest();
        expect(action).toEqual({ type: LOGIN_REQUEST });
    });
    it("Should return login fail action", () => {
        const error = "genericError";
        const action = loginFail({ data: { error } });
        expect(action).toEqual({ type: LOGIN_FAIL, error });
    });
    it("Should return logout action", () => {
        const action = logoutAction();
        expect(action).toEqual({ type: LOG_OUT });
    });
    it("Should return login success action", () => {
        const idToken = "token";
        const localId = "localId";
        const action = loginSuccess({ idToken, localId });
        expect(action).toEqual({ type: LOGIN_SUCCESS, idToken, localId });
    });
    it("Should logout", () => {
        const dispatch = jest.fn();
        logout()(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledWith(logoutAction());
        expect(dispatch).toHaveBeenCalledWith(setSuccessMessage("Logout Successful"));
    });

    it("Should check auth state", () => {
        const dispatch = jest.fn();
        const idToken = "someToken";
        localStorage.setItem("idToken", idToken);
        localStorage.setItem("expirationDate", new Date());
        checkAuthState()(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(1);
    });
    it("Should login", () => {
        const dispatch = jest.fn();
        const email = "someemail@email.com";
        const password = "password";
        const method = "post";
        const resp = { data: "success" };
        axios.post.mockResolvedValue(resp);
        login(email, password, method)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(loginRequest());
    });
});
