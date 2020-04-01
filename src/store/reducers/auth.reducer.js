import * as actionTypes from "../actions/actionTypes.actions";

const {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} = actionTypes;

const initialState = {
    loading: false,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return ({
                loading: true,
            });
        case LOGIN_FAIL:
            return ({
                loading: false,
                error: action.error
            });
        case LOGIN_SUCCESS:
            return ({
                loading: false,
                data: action.data,
            });
        default:
            return (state);
    }
};

export default reducer;
