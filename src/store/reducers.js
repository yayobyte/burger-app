import * as actionTypes from './actions';

const initialState= {
    ingredients: {
        salad: 0,
        meat: 0,
        cheese: 0,
        bacon: 0,
    },
    totalPrice: 4,
};

const INGREDIENT_PRICES = {
    bacon: 8,
    cheese: 5,
    salad: 3,
    meat: 15,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1,
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] - 1,
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
            };
        default:
            return state;
    }
};

export default reducer;
