import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import ContactData from "./ContactData";

const Checkout = ({ history, ingredients, price, purchaseInit, purchased, building }) => {
    useEffect(() => {
        purchaseInit();
    }, [purchaseInit]);
    const cancelOrder = () => {
        history.goBack();
    };
    if (ingredients) {
        if (purchased && !building){
            purchaseInit();
            return (
                <Redirect to="/" />
            );
        }
        return (
            <ContactData ingredients={ingredients} price={price} cancelOrder={cancelOrder} />
        )
    }
    return (
        <Redirect to="/" />
    )
};

export default Checkout;
