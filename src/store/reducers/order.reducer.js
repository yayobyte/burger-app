import * as actions from "../actions/actionTypes.actions";

const {
    PURCHASE_BURGER_FAIL,
    PURCHASE_BURGER_SUCCESS,
    SET_PURCHASE_BURGER_LOADING,
    UNSET_PURCHASE_BURGER_LOADING,
} = actions;

const initialState = {
    orders: [],
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_BURGER_FAIL:
            return ({
                ...state
            });
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            };
            return ({
                ...state,
                orders: state.orders.concat(newOrder),
            });
        case SET_PURCHASE_BURGER_LOADING:
            return ({
                ...state,
                loading: true,
            });
        case UNSET_PURCHASE_BURGER_LOADING:
            return ({
                ...state,
                loading: false,
            });
        default: return state;
    }
};
