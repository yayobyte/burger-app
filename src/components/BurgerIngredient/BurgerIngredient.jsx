import React from 'react';
import PropTypes from "prop-types";
import BreadButton from "./BreadBottom";
import BreadTop from "./BreadTop";
import Meat from './Meat';
import Cheese from "./Cheese";
import Salad from "./Salad";
import Bacon from "./Bacon";
import ingredientTypes from "./ingredientTypes";

const BurgerIngredient = ({ type }) => {
    switch (type) {
        case ingredientTypes.breadBottom:
            return <BreadButton />;
        case ingredientTypes.breadTop:
            return <BreadTop />;
        case ingredientTypes.meat:
            return <Meat />;
        case ingredientTypes.cheese:
            return <Cheese />;
        case ingredientTypes.salad:
            return <Salad />;
        case ingredientTypes.bacon:
            return <Bacon />;
        default:
            return <div />;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
