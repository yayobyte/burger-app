import * as actionTypes from '../actions/actionTypes.actions';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    UNSET_INGREDIENTS_LOADING,
    SET_INGREDIENTS_LOADING,
    SET_INGREDIENTS_SUCCESS,
    SET_INGREDIENTS_FAIL,
} = actionTypes;

const initialState= {
    ingredients: {},
    totalPrice: 4,
    error: false,
    loading: true,
};

const INGREDIENT_PRICES = {
    bacon: 8,
    cheese: 5,
    salad: 3,
    meat: 15,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case UNSET_INGREDIENTS_LOADING:
            return {
                ...state,
                loading: false,
            };
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
            };
        case SET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: Object.keys(action.ingredients)
                    .reduce((acc, item) => (
                        acc + action.ingredients[item]
                ), initialState.totalPrice),
            };
        case SET_INGREDIENTS_FAIL:
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
};

export default reducer;
