import * as actionTypes from '../actions/actionTypes.actions';

const {
    ADD_INGREDIENT,
    REMOVE_INGREDIENT,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCESS,
    GET_INGREDIENTS_FAIL,
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
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: Object.keys(action.ingredients)
                    .reduce((acc, item) => (
                        acc + action.ingredients[item]
                ), initialState.totalPrice),
                loading: false,
            };
        case GET_INGREDIENTS_FAIL:
            return {
                ...state,
                error: true,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
