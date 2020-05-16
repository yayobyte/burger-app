import instance from "../../../server";
import {
    addIngredient,
    removeIngredient,
    getIngredientsSuccess,
    getIngredientsFail,
    getIngredientsRequest,
    initIngredients,
} from "../burgerBuilder.actions";
import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
} from "../actionTypes.actions";

jest.mock("../../../server");

describe("Burger Actions", () => {
    it("Should add ingredient", () => {
        const ingredientName = "ingredient";
        const action = addIngredient(ingredientName);
        expect(action).toEqual({ type: ADD_INGREDIENT, ingredientName });
    })
    it("Should remove ingredient", () => {
        const ingredientName = "ingredient";
        const action = removeIngredient(ingredientName);
        expect(action).toEqual({ type: REMOVE_INGREDIENT, ingredientName });
    })
    it("Should return ingredients list", () => {
        const ingredients = ["ingredient1", "ingredient2"];
        const action = getIngredientsSuccess(ingredients);
        expect(action).toEqual({ type: GET_INGREDIENTS_SUCCESS, ingredients });
    })
    it("Should return ingredients failure", () => {
        const error = "error";
        const action = getIngredientsFail(error);
        expect(action).toEqual({ type: GET_INGREDIENTS_FAIL, error });
    })
    it("Should return ingredients request", () => {
        const action = getIngredientsRequest();
        expect(action).toEqual({ type: GET_INGREDIENTS_REQUEST });
    })
    it("Should initi ingredients", () => {
        const dispatch = jest.fn();
        const ingredients = ["one", "two"];
        instance.get.mockResolvedValue(ingredients);
        initIngredients()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(getIngredientsRequest());
    });
});
