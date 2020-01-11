import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import CheckoutSummary from "./CheckoutSummary";
import ContactData from "./ContactData";


const Checkout = ({ history, location, match }) => {
    const [ ingredients, setIngredients ] = useState({});
    useEffect(() => {
        const query = new URLSearchParams(location.search).entries();
        const paramIngredients = {};
        for (let params of query) {
            const [ key, value ] = params;
            paramIngredients[key] = +value;
        }
        setIngredients(paramIngredients);
    }, []);
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
                render={() => <ContactData ingredients={ingredients}/>}
            />
        </div>
    )
};

export default Checkout;
