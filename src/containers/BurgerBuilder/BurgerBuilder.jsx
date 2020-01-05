import React, {useState} from 'react';
import BuildControls from "../../components/BuildControls";
import Burger from "../../components/Burger/Burger";
import Aux from '../../components/Hoc/index';
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/OrderSummary";

const INGREDIENT_PRICES = {
    bacon: 8,
    cheese: 5,
    salad: 3,
    meat: 15,
};

const BurgerBuilder = () => {
    const [ burgerState, setBurgerState ] = useState({
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        price: 4,
        purchasable: false,
        purchasing: false,
    });
    const [ buttonControls, setButtonControls ] = useState({
        bacon: !!burgerState.ingredients.bacon,
        cheese: !!burgerState.ingredients.cheese,
        meat: !!burgerState.ingredients.meat,
        salad: !!burgerState.ingredients.salad,
    });
    const purchase = () => {
        setBurgerState({ ...burgerState, purchasing: true });
    };
    const cancelPurchase = () => {
        setBurgerState({ ...burgerState, purchasing: false })
    };
    const continuePurchase = () => (
        0
    );
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
        };
        setButtonControls({ ...buttonControls, [type] : true });
        setBurgerState(newBurgerState);
    };
    const deleteIngredient = (type) => {
        const { ingredients } = burgerState;
        const newCount = ingredients[type] - 1;
        const newPrice = burgerState.price - INGREDIENT_PRICES[type];
        const newIngredients = { ...ingredients, [type] : newCount };
        const newBurgerState = {
            ...burgerState,
            ingredients: newIngredients,
            price: newPrice,
            purchasable: getPurchaseState(newIngredients),
        };
        const ingredientTypeButtonControl = newIngredients[type] !== 0;
        setBurgerState(newBurgerState);
        setButtonControls({ ...buttonControls, [type] : ingredientTypeButtonControl });
    };
    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients} />
            <Modal show={burgerState.purchasing} onCancel={cancelPurchase}>
                <OrderSummary
                    ingredients={burgerState.ingredients}
                    onCancel={cancelPurchase}
                    onContinue={continuePurchase}
                    price={burgerState.price}
                />
            </Modal>
            <BuildControls
                addIngredient={addIngredient}
                deleteIngredient={deleteIngredient}
                buttonControls={buttonControls}
                price={burgerState.price}
                purchasable={burgerState.purchasable}
                purchase={purchase}
            />
        </Aux>
    );
};

export default BurgerBuilder;
