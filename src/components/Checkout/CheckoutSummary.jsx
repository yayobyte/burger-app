import React from 'react';
import styled from "styled-components";
import Burger from "../Burger";
import Button from "../UI/Button/Button";

const SummaryContainer = styled.div`
    text-align: center;
    width: 100%;
    .content {
      margin: auto;
    }
`;

const CheckoutSummary = ({ ingredients }) => (
    <SummaryContainer>
        <h1>We hope this tastes well!</h1>
        <div className="content">
            <Burger ingredients={ingredients}/>
        </div>
        <hr />
        <Button className="danger" click={() => (1)} >CANCEL</Button>
        <Button className="success" click={() => (1)} >CONTINUE</Button>
    </SummaryContainer>
);

export default CheckoutSummary;