import instance from "../../server";

import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
} from "./actionTypes.actions";

export const addIngredient = (ingredientName) => ({
    type: ADD_INGREDIENT,
    ingredientName,
});

export const removeIngredient = (ingredientName) => ({
    type: REMOVE_INGREDIENT,
    ingredientName,
});

const setIngredientsSuccess = (ingredients) => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients,
});

const setIngredientsFail = (error) => ({
    type: GET_INGREDIENTS_FAIL,
    error: error,
});

export const setIngredientsRequest = () => ({
    type: GET_INGREDIENTS_REQUEST,
});

export const initIngredients = () => {
    return dispatch => {
        dispatch(setIngredientsRequest());
        instance.get("config/ingredients.json")
            .then(({ data }) => {
                dispatch(setIngredientsSuccess(data))
            })
            .catch(() => {
                dispatch(setIngredientsFail())
            });
    }
};
