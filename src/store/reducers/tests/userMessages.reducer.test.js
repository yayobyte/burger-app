import reducer from "../userMessages.reducer";
import * as actionTypes from "../../actions/actionTypes.actions";

const {
    SET_ERROR_MESSAGES,
} = actionTypes;

const initialState= {
    ingredients: {},
    totalPrice: 4,
    error: false,
    loading: true,
    building: false,
};

describe("userMessages reducer", () => {
    it("Should handle set error messages", () => {
        const error = "error";
        expect(reducer(initialState, {
            type: SET_ERROR_MESSAGES,
            error,
        })).toEqual({
            ...initialState,
            error,
            successMessage: false,
        });
    });
});
