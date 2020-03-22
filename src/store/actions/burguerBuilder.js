import axios from "../../server";

import {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    SET_LOADING,
    SET_INGREDIENTS_FAIL,
    SET_INGREDIENTS_SUCCESS,
    UNSET_LOADING,
} from "./actionTypes";

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

const setLoading = () => ({
    type: SET_LOADING,
    loading: true,
});

const unsetLoading = () => ({
    type: UNSET_LOADING,
    loading: false,
});

export const initIngredients = () => {
    return dispatch => {
        dispatch(setLoading());
        axios.get("config/ingredients.json")
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
