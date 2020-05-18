import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
import Order from "./Order";

const Orders = ({ orders, getOrders, idToken, userId }) => {
    useEffect(() => {
        getOrders(idToken, userId);
    }, [getOrders, idToken, userId]);
    return (
        <div>
            <Typography
                data-testid="orders-header"
                variant="h2"
                align="center"
                color="secondary"
            >
                Orders
            </Typography>
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
                    <Typography variant="body1">You do not have any order yet</Typography>
                    <Link to="/" >Click to Order</Link>
                </div>
            )}
        </div>
    )
};

export default Orders;
