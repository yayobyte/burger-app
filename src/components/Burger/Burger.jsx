import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";
import BurgerIngredient from "../BurgerIngredient";
import ingredientTypes from "../BurgerIngredient/ingredientTypes";

const BurgerContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  overflow-y: scroll;
  
  @media (min-width: 500px) and (min-height: 400px) {
    width: 250px;
    height: 200px;
  }
  
  @media (min-width: 500px) and (min-height: 401px) {
    width: 350px;
    height: 300px;
  }
  
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 500px;
    height: 380px;
  }
`;

const Burger = ({ ingredients }) => {
    const arrayIngredients = Object.keys(ingredients).map(
        key => (
            [...Array(ingredients[key])].map((item , index) => (
                <BurgerIngredient type={key} key={key + index}/>
            ))
        )
    ).reduce((arr, el) => (
        arr.concat(el)
    ),[]);
    return (
        <BurgerContainer>
            <BurgerIngredient type={ingredientTypes.breadTop} />
            {arrayIngredients.length > 0 && arrayIngredients}
            {arrayIngredients.length === 0 && <p>Please add ingredients!</p>}
            <BurgerIngredient type={ingredientTypes.breadBottom} />
        </BurgerContainer>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired,
};

export default Burger;