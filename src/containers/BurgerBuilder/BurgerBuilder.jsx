import React, { useState } from 'react';
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from '../../components/Hoc/index';

const INGREDIENT_PRICES = {
    bacon: 8,
    cheese: 5,
    salad: 3,
    meat: 15,
};

const BurgerBuilder = () => {
    const [ ingredients, setIngredients ] = useState({
        bacon: 0,
        cheese: 1,
        meat: 3,
        salad: 0,
    });
    const [ price, setPrice ] = useState({ price: 4 });
    const addIngredient = (type) => {
        const newCount = ingredients[type] + 1;
        const newPrice = { price: price + INGREDIENT_PRICES[type]};
        const newIngredients = { ...ingredients, [type] : newCount };
        setIngredients(newIngredients);
        setPrice(newPrice);
    };
    const deleteIngredient = (type) => {
        if(ingredients[type]>0){
            const newCount = ingredients[type] - 1;
            const newPrice = { price: price - INGREDIENT_PRICES[type]};
            const newIngredients = { ...ingredients, [type] : newCount };
            setIngredients(newIngredients);
            setPrice(newPrice);
        }
    };
    return (
        <Aux>
            <Burger ingredients={ingredients} />
            <BuildControls addIngredient={addIngredient} deleteIngredient={deleteIngredient}/>
        </Aux>
    );
};

export default BurgerBuilder;
