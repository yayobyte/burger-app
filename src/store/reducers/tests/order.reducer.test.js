import reducer from "../order.reducer";
import * as actionTypes from "../../actions/actionTypes.actions";

const {
    GET_ORDERS_FAIL,
} = actionTypes;

const initialState= {
    ingredients: {},
    totalPrice: 4,
    error: false,
    loading: true,
    building: false,
};

describe("orders reducer", () => {
    it("Should handle get orders fail", () => {
        const error = {
            status: "errorStatus",
            data: {
                error: "Error message",
            }
        };
        expect(reducer(initialState, {
            type: GET_ORDERS_FAIL,
            error,
        })).toEqual({
            ...initialState,
            error: {
                status: error.status,
                message: error.data.error,
            },
            loading: false,
            successMessage: false,
        });
    });
});
