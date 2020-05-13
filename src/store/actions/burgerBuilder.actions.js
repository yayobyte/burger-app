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

const addIngredient = (ingredientName) => ({
    type: ADD_INGREDIENT,
    ingredientName,
});

const removeIngredient = (ingredientName) => ({
    type: REMOVE_INGREDIENT,
    ingredientName,
});

const getIngredientsSuccess = (ingredients) => ({
    type: GET_INGREDIENTS_SUCCESS,
    ingredients,
});

const getIngredientsFail = (error) => ({
    type: GET_INGREDIENTS_FAIL,
    error,
});

const getIngredientsRequest = () => ({
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
                dispatch(setErrorMessages(response ? response.data : "Unknown error"));
            });
    }
};

export {
    addIngredient,
    removeIngredient,
    getIngredientsSuccess,
    getIngredientsFail,
    getIngredientsRequest,
}