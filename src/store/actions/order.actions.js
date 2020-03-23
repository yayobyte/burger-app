import * as actions from "./actionTypes.actions";
import instance from "../../server";

const {
    PURCHASE_BURGER_FAIL,
    PURCHASE_BURGER_SUCCESS,
    SET_PURCHASE_BURGER_LOADING,
    UNSET_PURCHASE_BURGER_LOADING,
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

export const setLoading = () => ({
    type: SET_PURCHASE_BURGER_LOADING,
});

export const unsetLoading = () => ({
    type: UNSET_PURCHASE_BURGER_LOADING,
});

export const purchaseBurger = (orderData) => {
    return (dispatch => {
        dispatch(setLoading());
        instance.post('/orders.json', orderData)
            .then(( { data } ) => {
                dispatch(purchaseBurgerSuccess(data, orderData));
            })
            .catch((error) => {
                dispatch(purchaseBurgerFail(error))
            })
            .finally(() => {
                dispatch(unsetLoading());
            });
    })
};
