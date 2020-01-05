import React from 'react';
import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    
    &.success {
        color: #5C9210;
        border: 1px solid #5C9210;
    }
    
    &.success:active {
        color: #295F00;
        border: 1px solid #295F00;
        background-color: #DBFF8F;
    }
    
    &.danger {
        color: #944317;
        border: 1px solid #944317;
    }
    
    &.danger:active {
        color: #480000;
        border: 1px solid #480000;
        background-color: #FFC296;
    }
`;

export default ({ children, click, className }) => (
    <Button onClick={click} className={className} >
        {children}
    </Button>
);
