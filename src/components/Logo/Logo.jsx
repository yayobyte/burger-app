import React from "react";
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Person from '@material-ui/icons/Person';

const Container = styled.div`
  height: 100%;
  box-sizing: border-box;
`;

const Logo = ({ className }) => (
    <Container className={className}>
        <Avatar color="primary" >
            <Person />
        </Avatar>
    </Container>
);

export default Logo;
