import React from 'react';
import Aux from '../Hoc/index'
import Button from '../UI/Button'

const OrderSummary = ({ ingredients, onCancel, onContinue, price }) => {
    const ingredientsSummary = Object.keys(ingredients).map(item => (
        <li key={item}><span>{item.toUpperCase()}</span>: {ingredients[item]}</li>
    ));
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button className='danger' click={onCancel}>Cancel</Button>
            <Button className='success' click={onContinue}>Continue</Button>
        </Aux>
    );
};

export default OrderSummary;