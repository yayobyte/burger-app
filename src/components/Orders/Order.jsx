import React from 'react';
import styled from "styled-components";
import { Typography, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { secondaryColor } from "../../config/theme";

const OrderContainer = styled.div`
    width: 80%;
    padding: 10px;
    margin: 10px auto;
    box-sizing: border-box;
    
    .paper {
      padding: 20px;
    }
    
    .list {
      padding: 4px 16px;
    }
  
    .title {
      font-weight: 600;
    }
`;

const Order = ({ customer, ingredients, price, orderId }) => (
    <OrderContainer>
        <Paper elevation={4} className="paper" >
            <Typography variant="subtitle1" color="secondary" align="center">{orderId}</Typography>
            <br />
            <Typography className="title" variant="subtitle2">Ingredients: </Typography>
            {ingredients &&
                <List>
                    {Object.keys(ingredients).map(item => (
                        <ListItem key={item} className="list" divider>
                            <Typography variant="body2">
                                {item.toUpperCase()}: {ingredients[item]}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            }
            <br />
            <Typography className="title" variant="subtitle2">Address: </Typography>
            {customer &&
                <List>
                    {Object.keys(customer).filter((item) => item !== "name").map((item) => (
                        <ListItem key={item}  className="list" divider>
                            <Typography variant="body2">
                                {item.toUpperCase()}: {customer[item]}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            }
            <br />
            <Typography align="center" variant="h4" color="primary">${price.toFixed(2)}</Typography>
        </Paper>
    </OrderContainer>
);

export default Order;
