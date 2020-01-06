import React from 'react';
import PropTypes from "prop-types";
import BreadButton from "./BreadBottom";
import BreadTop from "./BreadTop";
import Meat from './Meat';
import Cheese from "./Cheese";
import Salad from "./Salad";
import Bacon from "./Bacon";
import burgerComponents from "./burgerComponents";

const BurgerIngredient = ({ type }) => {
    switch (type) {
        case burgerComponents.breadBottom:
            return <BreadButton />;
        case burgerComponents.breadTop:
            return <BreadTop />;
        case burgerComponents.meat:
            return <Meat />;
        case burgerComponents.cheese:
            return <Cheese />;
        case burgerComponents.salad:
            return <Salad />;
        case burgerComponents.bacon:
            return <Bacon />;
        default:
            return <div />;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
