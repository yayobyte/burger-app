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
`;

const BuildControls = ({ addIngredient, deleteIngredient }) => (
    <BuildControlsContainer>
        {controls.map((value) => (
            <BuildControl
                label={value.type}
                key={value.type}
                addIngredient={() => addIngredient(value.type)}
                deleteIngredient={() => deleteIngredient(value.type)}
            />
        ))}
    </BuildControlsContainer>
);

export default BuildControls;