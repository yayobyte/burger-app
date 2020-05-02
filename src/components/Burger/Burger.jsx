import React from 'react';
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PropTypes from "prop-types";
import BurgerIngredient from "../BurgerIngredient";
import ingredientTypes from "../BurgerIngredient/burgerComponents";

const BurgerContainer = styled.div`
  width: 100%;
  margin: auto;
  height: 350px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2em;
  overflow-y: scroll;
  
  .empty-ingredients {
    font-weight: 400;
  }
  
  .ingredient-in {
    animation: ingredientIn ${({timing}) => timing}ms ease-in forwards;
  }
  
  .ingredient-out {
    animation: ingredientOut ${({timing}) => timing}ms ease-in forwards;
  }
  
  @keyframes ingredientIn {
    0% {
      transform: translateY(-700%);
      opacity: 0;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes ingredientOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    50% {
      opacity: 0.7;
    }
    100% {
      transform: translateY(-700%);
      opacity: 0;
    }
  }
  
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
    const timing = 200;
    const classNames = {
        enterActive: "ingredient-in",
        exitActive: "ingredient-out",
    };
    const arrayIngredients = Object.keys(ingredients).map(
        key => (
            [...Array(ingredients[key])].map((item , index) => (
                <CSSTransition key={key + index} timeout={timing} classNames={classNames} >
                    <BurgerIngredient type={key} />
                </CSSTransition>
            ))
        )
    ).reduce((arr, el) => (
        arr.concat(el)
    ),[]);
    return (
        <BurgerContainer timing={timing}>
            <BurgerIngredient type={ingredientTypes.breadTop} />
            <TransitionGroup component={null}>
                {arrayIngredients.length > 0 && arrayIngredients}
            </TransitionGroup>
            {arrayIngredients.length === 0 && (
                <p className="empty-ingredients" >Please add ingredients!</p>
            )}
            <BurgerIngredient type={ingredientTypes.breadBottom} />
        </BurgerContainer>
    );
};

Burger.propTypes = {
    ingredients: PropTypes.object.isRequired,
};

export default Burger;
