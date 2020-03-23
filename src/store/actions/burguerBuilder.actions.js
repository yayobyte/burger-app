import instance from "../../server";

import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_INGREDIENTS_FAIL,
    SET_INGREDIENTS_SUCCESS,
    SET_INGREDIENTS_LOADING,
    UNSET_INGREDIENTS_LOADING,
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
    type: SET_INGREDIENTS_SUCCESS,
    ingredients,
});

const setIngredientsFail = (error) => ({
    type: SET_INGREDIENTS_FAIL,
    error: error,
});

export const setLoading = () => ({
    type: SET_INGREDIENTS_LOADING,
});

export const unsetLoading = () => ({
    type: UNSET_INGREDIENTS_LOADING,
});

export const initIngredients = () => {
    return dispatch => {
        dispatch(setLoading());
        instance.get("config/ingredients.json")
            .then(({ data }) => {
                dispatch(setIngredientsSuccess(data))
            })
            .catch(() => {
                dispatch(setIngredientsFail())
            })
            .finally(() => {
                dispatch(unsetLoading())
            });
    }
};
