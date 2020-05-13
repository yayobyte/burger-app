import {
    loginRequest,
    loginFail,
    loginSuccess,
    logoutAction,
} from "../auth.actions";
import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOG_OUT,
} from "../actionTypes.actions";

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
});
