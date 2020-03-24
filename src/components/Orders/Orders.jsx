import React, { useEffect } from "react";
import Order from "./Order";
import Spinner from "../UI/Spinner/Spinner";

const Orders = ({ loading, orders, getOrders }) => {
    useEffect(() => {
        getOrders();
    }, []);
    return (
        loading ? <Spinner/>
        :
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
        </div>
    )
};

export default Orders;
