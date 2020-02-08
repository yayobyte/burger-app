import React, { useState } from 'react';
import BuildControls from "../../components/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";
import Burger from "../../components/Burger/Burger";
import Aux from '../../components/Hoc/index';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerBuilder = ({
    history, ingredients, addIngredient, deleteIngredient, totalPrice
}) => {
    const [ burgerState, setBurgerState ] = useState({
        purchasing: false,
        settingOrder: false,
    });
    const purchase = () => {
        setBurgerState({ ...burgerState, purchasing: true });
    };
    const cancelPurchase = () => {
        setBurgerState({ ...burgerState, purchasing: false })
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
    return (
        <Aux>
            <Burger ingredients={ingredients}/>
            <Modal show={burgerState.purchasing} onCancel={cancelPurchase}>
                {burgerState.settingOrder?
                    <Spinner />
                    :
                    <OrderSummary
                    ingredients={ingredients}
                    onCancel={cancelPurchase}
                    onContinue={continuePurchase}
                    price={totalPrice}
                    />
                }
            </Modal>
            <BuildControls
                ingredients={ingredients}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
                price={totalPrice}
                purchasable={getPurchaseState(ingredients)}
                purchase={purchase}
            />
        </Aux>
    );
};

export default BurgerBuilder;
