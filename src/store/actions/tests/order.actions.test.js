import * as actions from "../actionTypes.actions";
import instance from "../../../server";
import {
    purchaseBurgerSuccess,
    purchaseBurgerFail,
    purchaseBurgerRequest,
    purchaseInit,
    getOrdersReq,
    getOrdersSuc,
    getOrdersFail,
    purchaseBurger, getOrders,
} from "../order.actions";

const {
    PURCHASE_BURGER_REQUEST,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_FAIL,
    PURCHASE_INIT,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    GET_ORDERS_FAIL,
} = actions;

jest.mock('../../../server');

describe("Order Actions", () => {
    it("Should request purchase burger", () => {
        const action = purchaseBurgerRequest();
        expect(action).toEqual({ type: PURCHASE_BURGER_REQUEST });
    });
    it("Should fail burguer purchase", () => {
        const error = "error";
        const action = purchaseBurgerFail(error);
        expect(action).toEqual({ type: PURCHASE_BURGER_FAIL, error });
    });
    it("Should purchase burger successfully", () => {
        const name = "response name";
        const action = purchaseBurgerSuccess({ name });
        expect(action).toEqual({ type: PURCHASE_BURGER_SUCCESS, orderId: name });
    });
    it("Should purchase init", () => {
        const action = purchaseInit();
        expect(action).toEqual({ type: PURCHASE_INIT });
    });
    it("Should request getOrders", () => {
        const action = getOrdersReq();
        expect(action).toEqual({ type: GET_ORDERS_REQUEST });
    });
    it("Should fail getOrders", () => {
        const error = "error";
        const action = getOrdersFail(error);
        expect(action).toEqual({ type: GET_ORDERS_FAIL, error });
    });
    it("Should success getOrders", () => {
        const orders = ["Order1", "Order2"];
        const action = getOrdersSuc(orders);
        expect(action).toEqual({ type: GET_ORDERS_SUCCESS, orders });
    });
    it("Should purchase burger", () => {
        const dispatch = jest.fn();
        const response = { response: { data: "success" }};
        instance.post.mockResolvedValue(response);
        purchaseBurger({ }, "token")(dispatch);
        expect(dispatch).toHaveBeenCalledWith(purchaseBurgerRequest());
    });
    it("Should get orders", () => {
        const dispatch = jest.fn();
        const response = { response: { data: "success" }};
        instance.get.mockResolvedValue(response);
        getOrders("Token", "User")(dispatch);
        expect(dispatch).toHaveBeenCalledWith(getOrdersReq());
    });
});
