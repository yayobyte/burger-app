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
    
    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
    
    &.success {
        color: #5C9210;
    }
    
    &.danger {
        color: #944317;
    }
`;

export default ({ children, click, className }) => (
    <Button onClick={click} className={className} >
        {children}
    </Button>
);
