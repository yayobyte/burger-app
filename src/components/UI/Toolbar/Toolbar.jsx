import React from 'react';
import styled from "styled-components";
import Logo from "../../Logo";
import Navigation from "../Navigation";
import SidebarToggle from "./SidebarToggle";

const Toolbar = styled.header`
  height: 56px;
  width: var(--app-width);
  left: cal(100% - var(--app-width));
  top: 0;
  position: fixed;
  display: flex;
  background-color: #703B09;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  
  nav {
    height: 100%;
  }
  
  .logo {
    height: 80%;
  }
  
  @media (max-width: 499px) {
    .desktop-only{
      display: none;
    }
    width: 100%;
    left: 0;
  }
`;

export default ({ open, isAuthenticated }) => (
    <Toolbar>
        <SidebarToggle toggle={open}/>
        <Logo className="logo"/>
        <nav className="desktop-only">
            <Navigation isAuthenticated={isAuthenticated} />
        </nav>
    </Toolbar>
);
