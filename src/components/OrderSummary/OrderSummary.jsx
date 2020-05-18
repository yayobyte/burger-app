import React from 'react';
import styled from 'styled-components';
import { Button } from '../UI'
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import NextIcon from "@material-ui/icons/DoneOutline";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const OrderSummaryContainer = styled.div`
  hr {
    background-color: #CCC;
    border: none;
    height: 1px;
  }
  
  .price-label {
    text-align: center;
    margin: 8px auto;
  }
  
  .actions {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;
  }
`;

const OrderSummary = ({ ingredients, onCancel, onContinue, price }) => {
    const ingredientsSummary = Object.keys(ingredients).map(item => (
        <ListItem key={item} divider>
            <Typography variant="body2">{item.toUpperCase()}: {ingredients[item]}</Typography>
        </ListItem>
    ));
    return (
        <OrderSummaryContainer>
            <Typography variant="h4" color="secondary" data-testid="order-summary-header">
                Order Summary
            </Typography>
            <br />
            <Typography variant="body2">
                A delicious burger with the following ingredients:
            </Typography>
            <List>
                {ingredientsSummary}
            </List>
            <Typography variant="subtitle1" color="secondary" className="price-label">
                Total Price
            </Typography>
            <Typography variant="h4" color="primary" align="right">
                ${price.toFixed(2)}
            </Typography>
            <hr />
            <div className="actions">
                <Button
                    data-testid="cancel-summary-button"
                    onClick={onCancel}
                    variant="outlined"
                    color="primary"
                    startIcon={<CancelIcon />}
                >
                    Cancel
                </Button>
                <Button
                    data-testid="continue-summary-button"
                    onClick={onContinue}
                    variant="contained"
                    color="secondary"
                    startIcon={<NextIcon />}
                >
                    Continue
                </Button>
            </div>
        </OrderSummaryContainer>
    );
};

export default OrderSummary;