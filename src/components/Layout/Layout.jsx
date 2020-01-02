import React from 'react';
import styled from 'styled-components';
import Aux from '../Hoc';

const Main = styled.main`
  margin: 12px 0;
`;

const Layout = ({ children }) => (
    <Aux>
        <div>Header, navBar, etc</div>
        <Main>{children}</Main>
    </Aux>
);

export default Layout;
