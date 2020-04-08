import React from "react";
import styled from 'styled-components';
import NavigationItem from "./NavigationItem";

const UnorderedList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    
    @media(min-width: 500px) {
      flex-flow: row;
    }
`;

const Navigation = ({ isAuthenticated }) => (
    <UnorderedList>
        <NavigationItem link="/" exact >Burger Builder</NavigationItem>
        {isAuthenticated && <NavigationItem link="/orders" >Orders</NavigationItem>}
        {isAuthenticated
            ? <NavigationItem link="/logout" >Logout</NavigationItem>
            : <NavigationItem link="/auth" >Login</NavigationItem>
        }
    </UnorderedList>
);

export default Navigation;
