import * as actionTypes from '../actions/actionTypes.actions';

const {
    PURCHASE_BURGER_FAIL,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_BURGER_REQUEST,
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
    building: false,
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
                building: true,
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
                building: true,
            };
        case GET_INGREDIENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
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
                error: false,
                building: false,
            };
        case GET_INGREDIENTS_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        case PURCHASE_BURGER_REQUEST:
            return ({
                ...state,
                loading: true,
                error: false,
            });
        case PURCHASE_BURGER_FAIL:
            return ({
                ...state,
                error: {
                    status: action.error.status,
                    message: action.error.data.error,
                },
                loading: false,
            });
        case PURCHASE_BURGER_SUCCESS:
            return ({
                ...state,
                purchased: true,
                loading: false,
                error: false,
                building: false,
            });
        default:
            return state;
    }
};

export default reducer;
