import * as actions from "../actions/actionTypes.actions";

const {
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
    PURCHASE_INIT,
} = actions;

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return ({
                ...state,
                loading: true,
                error: false,
                successMessage: false,
            });
        case GET_ORDERS_SUCCESS:
            return ({
                ...state,
                orders: action.orders,
                loading: false,
                successMessage: undefined,
                error: false,
            });
        case GET_ORDERS_FAIL:
            return ({
                ...state,
                error: action.error,
                loading: false,
                successMessage: false,
            });
        case PURCHASE_INIT:
            return ({
                ...state,
                purchased: false,
            });
        default: return state;
    }
};
