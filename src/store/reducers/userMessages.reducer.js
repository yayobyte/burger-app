import {
    SET_SUCCESS_MESSAGES,
    SET_ERROR_MESSAGES,
    REMOVE_MESSAGES,
} from "./../actions/actionTypes.actions"

const initialState = {
    error: null,
    successMessage: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_ERROR_MESSAGES:
            console.log(action.error);
            return({
                ...state,
                error: action.error,
                successMessage: false,
            });
        case SET_SUCCESS_MESSAGES:
            return({
                ...state,
                successMessage: action.successMessage,
                error: false,
            });
        case REMOVE_MESSAGES:
            return({
                ...state,
                error: false,
                successMessage: false,
            });
        default:
            return state;
    }
};

export default reducer;
