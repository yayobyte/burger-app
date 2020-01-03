import React from "react";
import styled from 'styled-components';
import Aux from '../../Hoc';
import Logo from "../../Logo";
import Navigation from "../Navigation";
import { Backdrop } from "../Modal";

const SideDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 24px 16px;
  background-color: white;
  width: 280px;
  max-width: 70%;
  height: 100%;
  box-sizing: border-box;
  z-index: 200;
  transition: transform 0.2s ease-out;
  
  &.open {
    transform: translateX(0);
  }
  
  &.close {
    transform: translateX(-100%);
  }

    
  .logo {
    height: 11%;
    margin-bottom: 32px;
  }
  
  @media(min-width: 500px) {
    display: none;
  }
`;

export default ({ show, close }) => (
    <Aux>
        <Backdrop show={show} click={close}/>
        <SideDrawerContainer className={show? 'open' : 'close'}>
            <Logo className="logo"/>
            <nav>
                <Navigation />
            </nav>
        </SideDrawerContainer>
    </Aux>
);
