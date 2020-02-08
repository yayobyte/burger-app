import React from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from "./CheckoutSummary";
import ContactData from "./ContactData";


const Checkout = ({ history, match, ingredients, price }) => {
    const cancelCheckout = () => {
        history.goBack();
    };
    const placeCheckout = () => {
        history.replace(match.path + '/contact-data' );
    };
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
};

export default Checkout;
