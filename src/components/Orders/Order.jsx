import React from 'react';
import styled from "styled-components";

const OrderContainer = styled.div`
    width: 80%;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
  
  .title {
    font-weight: 600;
  }
  
  ul > li {
    text-transform: capitalize;
  }
  
  .price {
    text-align: center;
    margin: 8px auto;
    color: #703b09;
    font-weight: 700;
    font-size: 1.5em;
  }
`;

const Order = ({ customer, ingredients, price, orderId }) => (
    <OrderContainer>
        <h3>{orderId}</h3>
        <p className="title">Ingredients: </p>
        {ingredients &&
            <ul>
                {Object.keys(ingredients).map(item => (
                    <li key={item}>{item}: {ingredients[item]}</li>
                ))}
            </ul>
        }
        <p className="title">Customer: </p>
        {customer &&
            <ul>
                {Object.keys(customer).map((item) => (
                    <li key={item}>{item}: {customer[item]}</li>
                ))}
            </ul>
        }
        <p className="price">${price.toFixed(2)}</p>
    </OrderContainer>
);

export default Order;
