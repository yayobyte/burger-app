import React from 'react';
import Aux from '../Hoc/index'

const OrderSummary = ({ ingredients }) => {
    const ingredientsSummary = Object.keys(ingredients).map(item => (
        <div><span>{item}</span>: {ingredients[item]}</div>
    ));
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
        </Aux>
    );
};

export default OrderSummary;