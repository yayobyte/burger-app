import React, { useState } from 'react';
import styled from 'styled-components';
import Aux from '../../components/Hoc';
import Toolbar from "../../components/UI/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/SideDrawer/SideDrawer";

const Main = styled.main`
  margin-top: 72px;
`;

const Layout = ({ children }) => {
    const [ layoutState, setLayoutState ] = useState({
        showSideDrawer: false,
    });
    const toggleSideDrawer = () => {
        setLayoutState({ showSideDrawer: !layoutState.showSideDrawer });
    };
    return (
        <Aux>
            <Toolbar open={toggleSideDrawer}/>
            <SideDrawer show={layoutState.showSideDrawer} close={toggleSideDrawer} />
            <Main>{children}</Main>
        </Aux>
    )
};

export default Layout;
