import instance from "../../server";

import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
} from "./actionTypes.actions";

import {
    setErrorMessages,
} from "./userMessages.actions"

export const addIngredient = (ingredientName) => ({
    type: ADD_INGREDIENT,
    ingredientName,
});

export const removeIngredient = (ingredientName) => ({
    type: REMOVE_INGREDIENT,
    ingredientName,
});

const getIngredientsSuccess = (ingredients) => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients,
});

const getIngredientsFail = (error) => ({
    type: GET_INGREDIENTS_FAIL,
    error: error,
});

export const getIngredientsRequest = () => ({
    type: GET_INGREDIENTS_REQUEST,
});

export const initIngredients = () => {
    return dispatch => {
        dispatch(getIngredientsRequest());
        instance.get("config/ingredients.json")
            .then(({ data }) => {
                dispatch(getIngredientsSuccess(data));
            })
            .catch(({ response }) => {
                dispatch(getIngredientsFail(response));
                dispatch(setErrorMessages(response.data));
            });
    }
};
