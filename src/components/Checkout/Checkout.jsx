import React from "react";
import CheckoutSummary from "./CheckoutSummary";

const Checkout = () => {
    const ingredients = {
        meat: 1,
        bacon: 1,
    };
    return (
        <CheckoutSummary ingredients={ingredients}/>
    )
};

export default Checkout;