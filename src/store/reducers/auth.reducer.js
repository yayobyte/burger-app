import * as actionTypes from "../actions/actionTypes.actions";

const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
} = actionTypes;

const initialState = {
    loading: false,
    error: false,
    successMessage: false,
    idToken: null,
    localId: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return ({
                ...state,
                loading: true,
                successMessage: false,
                error: false,
            });
        case LOGIN_FAIL:
            return ({
                ...state,
                loading: false,
                successMessage: false,
                error: {
                    status: action.error.status,
                    message: action.error.data.error,
                },
            });
        case LOGIN_SUCCESS:
            return ({
                ...state,
                loading: false,
                error: false,
                successMessage: "Login Successful",
                idToken: action.idToken,
                localId: action.localId,
            });
        case LOG_OUT:
            return ({
                ...state,
                loading: false,
                error: false,
                idToken: null,
                localId: null,
            });

        default:
            return (state);
    }
};

export default reducer;
