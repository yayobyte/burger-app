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

const purchaseBurgerSuccess = (id, order) =>  ({
    type: PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: order,
});

const purchaseBurgerFail = (error) => ({
    type: PURCHASE_BURGER_FAIL,
    error,
});

const purchaseBurgerRequest = () => ({
    type: PURCHASE_BURGER_REQUEST,
});

export const purchaseBurger = (orderData) => {
    return (dispatch => {
        dispatch(purchaseBurgerRequest());
        instance.post('/orders.json', orderData)
            .then(( { data } ) => {
                dispatch(purchaseBurgerSuccess(data, orderData));
            })
            .catch((error) => {
                dispatch(purchaseBurgerFail(error))
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

export const getOrders = () => {
    return ((dispatch) => {
        dispatch(getOrdersReq());
        instance.get('/orders.json')
            .then(( { data } ) => {
                dispatch(getOrdersSuc(data))
            })
            .catch((error) => {
                dispatch(getOrdersFail(error))
            })
    });
}
