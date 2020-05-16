import * as actions from "./actionTypes.actions";
import instance from "../../server";
import {
    setSuccessMessage,
    setErrorMessages,
} from "./userMessages.actions"

import {
    initIngredients,
} from "./burgerBuilder.actions";

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
                dispatch(initIngredients());
                dispatch(setSuccessMessage(`Your burger is being prepared. Order id: ${data.name}`));
            })
            .catch(({ response }) => {
                dispatch(purchaseBurgerFail(response));
                dispatch(setErrorMessages(response.data));
            });
    })
};

const purchaseInit = () => ({
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

export const getOrders = (token, userId) => {
    return ((dispatch) => {
        dispatch(getOrdersReq());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        instance.get('/orders.json' + queryParams)
            .then(( { data } ) => {
                dispatch(getOrdersSuc(data))
            })
            .catch(({ response }) => {
                dispatch(getOrdersFail(response));
                dispatch(setErrorMessages(response));
            })
    });
}

export {
    purchaseBurgerSuccess,
    purchaseBurgerFail,
    purchaseBurgerRequest,
    purchaseInit,
    getOrdersReq,
    getOrdersSuc,
    getOrdersFail,
}