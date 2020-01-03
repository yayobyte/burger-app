import React from "react";
import styled from 'styled-components';
import BurgerLogo from '../../assets/images/burger-logo.png';

const Container = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  
  img {
    height: 80%;
  }
`;

const Logo = ({ className }) => (
    <Container className={className}>
        <img src={BurgerLogo} alt="burger-logo"/>
    </Container>
);

export default Logo;
