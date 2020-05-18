import reducer from "../burgerBuilder.reducer";
import * as actionTypes from "../../actions/actionTypes.actions";

const {
    PURCHASE_BURGER_FAIL,
    GET_INGREDIENTS_FAIL,
} = actionTypes;

const initialState= {
    ingredients: {},
    totalPrice: 4,
    error: false,
    loading: true,
    building: false,
};

describe("burguerBuilder reducer", () => {
    it("Should handle purchase get ingredients fail", () => {
        const error = "error";
        expect(reducer(initialState, {
            type: GET_INGREDIENTS_FAIL,
            error,
        })).toEqual({
            ...initialState,
            error,
            loading: false,
        });
    });
    it("Should handle purchase burger fail", () => {
        const error = {
            status: "errorStatus",
            data: {
                error: "Error message",
            }
        };
        expect(reducer(initialState, {
            type: PURCHASE_BURGER_FAIL,
            error,
        })).toEqual({
            ...initialState,
            error: {
                status: error.status,
                message: error.data.error,
            },
            loading: false,
        });
    });
});
