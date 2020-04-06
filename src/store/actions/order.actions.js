import * as actions from "./actionTypes.actions";
import instance from "../../server";

const {
    PURCHASE_BURGER_REQUEST,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAIL,
    PURCHASE_INIT,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
} = actions;

const purchaseBurgerSuccess = (response) =>  ({
    type: PURCHASE_BURGER_SUCCESS,
    orderId: response.name,
});

const purchaseBurgerFail = (error) => ({
    type: PURCHASE_BURGER_FAIL,
    error,
});

const purchaseBurgerRequest = () => ({
    type: PURCHASE_BURGER_REQUEST,
});

export const purchaseBurger = (orderData, token) => {
    return (dispatch => {
        dispatch(purchaseBurgerRequest());
        instance.post('/orders.json?auth=' + token , orderData)
            .then(( { data } ) => {
                dispatch(purchaseBurgerSuccess(data));
            })
            .catch(({ response }) => {
                dispatch(purchaseBurgerFail(response))
            });
    })
};

export const purchaseInit = () => ({
    type: PURCHASE_INIT,
});

const getOrdersReq = () => ({
    type: GET_ORDERS_REQUEST,
});

const getOrdersSuc = (orders) => ({
    type: GET_ORDERS_SUCCESS,
    orders,
});

const getOrdersFail = (error) => ({
    type: GET_ORDERS_FAIL,
    error,
});

export const getOrders = (token) => {
    return ((dispatch) => {
        dispatch(getOrdersReq());
        instance.get('/orders.json?auth=' + token)
            .then(( { data } ) => {
                dispatch(getOrdersSuc(data))
            })
            .catch(({ response }) => {
                dispatch(getOrdersFail(response))
            })
    });
}
