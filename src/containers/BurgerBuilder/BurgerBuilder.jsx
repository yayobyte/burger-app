import React, { useState, useEffect } from 'react';
import _ from "lodash";
import styled from "styled-components";
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger/Burger";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 680px;
  height: calc(92vh - 72px);
`;

const BurgerBuilder = ({
    addIngredient, deleteIngredient, initIngredients,
    totalPrice, history, ingredients, isAuthenticated, purchased,
}) => {
    const [ purchasing, setPurchasing ] = useState(false);
    const purchase = () => {
        if (isAuthenticated){
            setPurchasing(true);
        } else {
            history.push('/auth');
        }
    };
    const cancelPurchase = () => {
        setPurchasing(false);
    };
    const continuePurchase = () => {
        history.push('/checkout');
    };
    const getPurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => (
            ingredients[key]
        )).reduce((sum, el) => (
            sum + el
        ), 0);
        return sum > 0;
    };
    useEffect(() => {
        if (_.isEmpty(ingredients)){
            initIngredients();
        }
    }, [ingredients, initIngredients]);
    return (
        <Container>
            <Burger ingredients={ingredients}/>
            <Modal show={purchasing} onCancel={cancelPurchase}>
                <OrderSummary
                ingredients={ingredients}
                onCancel={cancelPurchase}
                onContinue={continuePurchase}
                price={totalPrice}
                />
            </Modal>
            <BuildControls
                ingredients={ingredients}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
                price={totalPrice}
                purchasable={getPurchaseState(ingredients)}
                purchase={purchase}
                isAuthenticated={isAuthenticated}
            />
        </Container>
    );
};

export default BurgerBuilder;
