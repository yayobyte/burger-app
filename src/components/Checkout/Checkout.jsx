import React, { useEffect } from "react";
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from "./CheckoutSummary";
import ContactData from "./ContactData";


const Checkout = ({ history, match, ingredients, price, purchaseInit, purchased }) => {
    useEffect(() => {
        purchaseInit();
    }, []);
    const cancelCheckout = () => {
        history.goBack();
    };
    const placeCheckout = () => {
        history.replace(match.path + '/contact-data' );
    };
    if (ingredients) {
        if (purchased){
            return (
                <Redirect to="/" />
            );
        }
        return (
            <div>
                <CheckoutSummary
                    ingredients={ingredients}
                    cancelOrder={cancelCheckout}
                    placeOrder={placeCheckout}
                />
                <Route
                    path={match.path + '/contact-data'}
                    render={() => <ContactData ingredients={ingredients} price={price} />}
                />
            </div>
        )
    }
    return (
        <Redirect to="/" />
    )
};

export default Checkout;
