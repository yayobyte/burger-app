import React from "react";
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 40px;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    cursor: pointer;

div {
    width: 90%;
    height: 3px;
    background-color: white;
}

@media (min-width: 500px) {
    display: none;
}
`;

const SidebarToggle = ({ toggle }) => (
    <SidebarContainer onClick={toggle}>
        <div />
        <div />
        <div />
    </SidebarContainer>
);

export default SidebarToggle;