import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import Order from "./Order";

const Orders = ({ orders, getOrders, idToken, userId }) => {
    useEffect(() => {
        getOrders(idToken, userId);
    }, []);
    return (
        <div>
            <h2>Orders</h2>
            {orders && Object.keys(orders).map(item => (
                <Order
                    key={item}
                    orderId={item}
                    customer={orders[item].customer}
                    ingredients={orders[item].ingredients}
                    price={orders[item].price}
                />
            ))}
            {_.isEmpty(orders) && (
                <div style={{ textAlign: "center" }}>
                    <p>You do not have any order yet</p>
                    <Link to="/" >Click to Order</Link>
                </div>
            )}
        </div>
    )
};

export default Orders;
