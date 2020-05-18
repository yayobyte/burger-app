import React from "react";
import styled from 'styled-components';
import Aux from '../../Hoc';
import Navigation from "../Navigation";
import { Backdrop } from "../Modal";
import Lottie from "react-lottie";
import * as burgerData from "../../../assets/lotties/delicious-burger.json";

const SideDrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 280px;
  max-width: 70%;
  height: 100%;
  box-sizing: border-box;
  z-index: 200;
  transition: transform 0.2s ease-out;
  
  &.open {
    transform: translateX(0);
    box-shadow: 10px 10px 10px rgba(20,20,20,0.4);
  }
  
  &.close {
    transform: translateX(-100%);
  }
  
  div.lottie-burger {
    border-bottom: 1px solid #CCCCCC;
    box-shadow: inset 0px -10px 10px rgba(0,0,0,0.2);
    padding: 0;
  }
  
  nav.nav {
    padding: 16px;
  }
  
  nav li {
    border-bottom: 1px solid #EDEDED;
    padding-bottom: 10px;
    margin-top: 0px;
  }
  
  @media(min-width: 500px) {
    display: none;
  }
`;

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: burgerData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

export default ({ show, close, isAuthenticated }) => (
    <Aux>
        <Backdrop show={show} click={close}/>
        <SideDrawerContainer className={show? 'open' : 'close'} onClick={close}>
            <div className="lottie-burger">
                <Lottie
                    options={defaultOptions}
                    height={175}
                    width={150}
                    isStopped={false}
                    isPaused={false}
                />
            </div>
            <nav className="nav">
                <Navigation isAuthenticated={isAuthenticated} />
            </nav>
        </SideDrawerContainer>
    </Aux>
);
