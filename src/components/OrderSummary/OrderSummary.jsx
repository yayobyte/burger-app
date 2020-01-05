import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button'

const OrderSummaryContainer = styled.div`
  h2 {
    font-weight: 300;
    text-align: center;
    margin: 12px auto;
  }
  
  ul {
    list-style: none;
  }
  
  hr {
    background-color: #CCC;
    border: none;
    height: 1px;
  }
  
  .price-label, .price {
    font-weight: 400;
    text-align: center;
    margin: 8px auto;
    color: #480000;
  }
  
  .price {
    font-weight: 700;
    font-size: 1.5em;
  }
  
  .actions {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
  }
`;

const OrderSummary = ({ ingredients, onCancel, onContinue, price }) => {
    const ingredientsSummary = Object.keys(ingredients).map(item => (
        <li key={item}><span>{item.toUpperCase()}</span>: {ingredients[item]}</li>
    ));
    return (
        <OrderSummaryContainer>
            <h2>Order Summary</h2>
            <hr />
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p className="price-label">Total Price</p>
            <p className="price">${price.toFixed(2)}</p>
            <p>Continue to checkout?</p>
            <hr />
            <div className="actions">
                <Button className='danger' click={onCancel}>Cancel</Button>
                <Button className='success' click={onContinue}>Continue</Button>
            </div>
        </OrderSummaryContainer>
    );
};

export default OrderSummary;