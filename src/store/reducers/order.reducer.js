import * as actions from "../actions/actionTypes.actions";

const {
    PURCHASE_BURGER_FAIL,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_REQUEST,
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
        case PURCHASE_BURGER_REQUEST:
            return ({
                ...state,
                loading: true,
            });
        case PURCHASE_BURGER_FAIL:
            return ({
                ...state,
                error: action.error,
                loading: false,
            });
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            };
            return ({
                ...state,
                orders: state.orders.concat(newOrder),
                purchased: true,
                loading: false,
            });
        case GET_ORDERS_REQUEST:
            return ({
                ...state,
                loading: true,
            });
        case GET_ORDERS_SUCCESS:
            return ({
                ...state,
                orders: action.orders,
                loading: false,
            });
        case GET_ORDERS_FAIL:
            return ({
                ...state,
                error: action.error,
                loading: false,
            });
        case PURCHASE_INIT:
            return ({
                ...state,
                purchased: false,
            });
        default: return state;
    }
};
