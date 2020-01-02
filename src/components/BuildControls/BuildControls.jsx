import React from 'react';
import styled from "styled-components";
import BuildControl from "../BuildControl";
import ingredientTypes from "../BurgerIngredient/ingredientTypes";

const controls = [
    { type: ingredientTypes.cheese },
    { type: ingredientTypes.bacon },
    { type: ingredientTypes.meat },
    { type: ingredientTypes.salad },
];

const BuildControlsContainer = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #CCC;
    margin: auto;
    padding: 10px 0;
  
    p.price {
        color: aliceblue;
        border: 1px solid aliceblue;
        padding: 12px;
    }
  
    .OrderButton {
        background-color: #DAD735;
        outline: none;
        cursor: pointer;
        border: 1px solid #966909;
        color: #966909;
        font-family: inherit;
        font-size: 1.2em;
        padding: 15px 30px;
        box-shadow: 2px 2px 2px #966909;
    }
    
    .OrderButton:hover, .OrderButton:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }
    
    .OrderButton:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }
    
    .OrderButton:not(:disabled) {
        animation: enable 0.3s linear;
    }
    
    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const BuildControls = ({ addIngredient, deleteIngredient, buttonControls, price, purchasable }) => (
    <BuildControlsContainer>
        <p className="price">Price: <strong>${price.toFixed(2)}</strong></p>
        {controls.map((value) => (
            <BuildControl
                label={value.type}
                key={value.type}
                addIngredient={() => addIngredient(value.type)}
                deleteIngredient={() => deleteIngredient(value.type)}
                disabledButton={!buttonControls[value.type]}
            />
        ))}
        <button className="OrderButton" disabled={!purchasable}>ORDER NOW</button>
    </BuildControlsContainer>
);

export default BuildControls;