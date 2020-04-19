import reducer from "../auth.reducer";
import * as actionTypes from "../../actions/actionTypes.actions";

const initialState = {
    loading: false,
    error: false,
    idToken: null,
    localId: null,
};

const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
} = actionTypes;

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });
    it('should store the token upon login', () => {
        expect(reducer(initialState, {
            type: LOGIN_SUCCESS,
            idToken: "token-id",
            localId: "local-id",
        })).toEqual({
            ...initialState,
            idToken: "token-id",
            localId: "local-id",
        });
    });
    it('should set loader upon login request', () => {
        expect(reducer(initialState, {
            type: LOGIN_REQUEST,
        })).toEqual({
            ...initialState,
            loading: true,
            error: false,
        });
    });
    it('should set unset loader upon login request', () => {
        expect(reducer(initialState, {
            type: LOGIN_FAIL,
            error: "error",
        })).toEqual({
            ...initialState,
            error: "error",
        });
    });
    it('should set unset tokenId logout request', () => {
        expect(reducer(initialState, {
            type: LOG_OUT,
            error: "error",
        })).toEqual({
            ...initialState,
            loading: false,
            error: false,
            idToken: null,
            localId: null,
        });
    });
});
