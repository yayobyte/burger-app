import React, { useState } from 'react';
import instance from '../../server';
import BuildControls from "../../components/BuildControls";
import Spinner from "../../components/UI/Spinner/Spinner";
import Burger from "../../components/Burger/Burger";
import Aux from '../../components/Hoc/index';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary";
import withErrorHandler from "../../components/Hoc/withErrorHandler";

const INGREDIENT_PRICES = {
    bacon: 8,
    cheese: 5,
    salad: 3,
    meat: 15,
    sauce: 2,
};

const INITIAL_INGREDIENTS = {
    bacon: 1,
    cheese: 1,
    meat: 1,
    salad: 1,
    sauce: 2,
};

const BurgerBuilder = () => {
    const [ burgerState, setBurgerState ] = useState({
        ingredients: { ...INITIAL_INGREDIENTS },
        price: 35,
        customer: {
            name: 'Yayo Gutierrez',
            cellphoneNumber: '5412364222',
            address: {
                line1: 'Dubai',
                line2: 'Silicon Oasis'
            },
        },
        buttonControls: Object.fromEntries(Object.entries(INITIAL_INGREDIENTS).map(
            ([ key, value ]) => ([[key], !!value])
        )),
        purchasable: true,
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
        setBurgerState({ ...burgerState, settingOrder: true });
        const { ingredients, price, customer } = burgerState;
        const order = { ingredients, price, customer };
        instance.post('/orders.json', order)
            .then((response) => {
                console.log('response: ',response);
            })
            .catch((error) => {
                console.log('error', error);
            })
            .finally(() => {
                setBurgerState({ ...burgerState, settingOrder: false, purchasing: false });
            });
    };
    const getPurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(key => (
            ingredients[key]
        )).reduce((sum, el) => (
            sum + el
        ), 0);
        return sum > 0;
    };
    const addIngredient = (type) => {
        const { ingredients } = burgerState;
        const newCount = ingredients[type] + 1;
        const newPrice = burgerState.price + INGREDIENT_PRICES[type];
        const newIngredients = { ...ingredients, [type] : newCount };
        const newBurgerState = {
            ...burgerState,
            ingredients: newIngredients,
            price: newPrice,
            purchasable: getPurchaseState(newIngredients),
            buttonControls: {
                ...burgerState.buttonControls,
                [type] : true,
            }
        };
        setBurgerState(newBurgerState);
    };
    const deleteIngredient = (type) => {
        const { ingredients } = burgerState;
        const newCount = ingredients[type] - 1;
        const newPrice = burgerState.price - INGREDIENT_PRICES[type];
        const newIngredients = { ...ingredients, [type] : newCount };
        const ingredientTypeButtonControl = newIngredients[type] !== 0;
        const newBurgerState = {
            ...burgerState,
            ingredients: newIngredients,
            price: newPrice,
            purchasable: getPurchaseState(newIngredients),
            buttonControls: {
                ...burgerState.buttonControls,
                [type] : ingredientTypeButtonControl,
            },
        };
        setBurgerState(newBurgerState);
    };
    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients}/>
            <Modal show={burgerState.purchasing} onCancel={cancelPurchase}>
                {burgerState.settingOrder?
                    <Spinner />
                    :
                    <OrderSummary
                    ingredients={burgerState.ingredients}
                    onCancel={cancelPurchase}
                    onContinue={continuePurchase}
                    price={burgerState.price}
                    />
                }
            </Modal>
            <BuildControls
                ingredients={burgerState.ingredients}
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
                buttonControls={burgerState.buttonControls}
                price={burgerState.price}
                purchasable={burgerState.purchasable}
                purchase={purchase}
            />
        </Aux>
    );
};

export default withErrorHandler(BurgerBuilder);
