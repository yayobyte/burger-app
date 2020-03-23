import React, { useState, useEffect } from 'react';
import _ from "lodash";
import BuildControls from "../../components/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";
import Burger from "../../components/Burger/Burger";
import Aux from '../../components/Hoc/index';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary";
import withErrorHandler from "../../components/Hoc/withErrorHandler";
import instance from "../../server";

const BurgerBuilder = ({
    addIngredient, deleteIngredient, initIngredients,
    totalPrice, history, ingredients, loading,
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
    useEffect(() => {
        if (_.isEmpty(ingredients)){
            initIngredients();
        }
    }, [ingredients, initIngredients]);
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
            {loading ? <Spinner /> :
            <BuildControls
                ingredients={ingredients}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
                price={totalPrice}
                purchasable={getPurchaseState(ingredients)}
                purchase={purchase}
            />}
        </Aux>
    );
};

export default withErrorHandler(BurgerBuilder, instance);
