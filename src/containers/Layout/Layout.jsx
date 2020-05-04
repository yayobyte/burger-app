import React, { useState } from 'react';
import styled from 'styled-components';
import Aux from '../../components/Hoc';
import Toolbar from "../../components/UI/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/SideDrawer/SideDrawer";

const Main = styled.main`
  margin-top: 72px;
  width: 100%;
`;

const Layout = ({ children, isAuthenticated }) => {
    const [ layoutState, setLayoutState ] = useState({
        showSideDrawer: false,
    });
    const toggleSideDrawer = () => {
        setLayoutState({ showSideDrawer: !layoutState.showSideDrawer });
    };
    return (
        <Aux>
            <Toolbar open={toggleSideDrawer} isAuthenticated={isAuthenticated} />
            <SideDrawer show={layoutState.showSideDrawer} close={toggleSideDrawer} isAuthenticated={isAuthenticated} />
            <Main>{children}</Main>
        </Aux>
    )
};

export default Layout;
