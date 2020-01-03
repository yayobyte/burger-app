import React from 'react';
import styled from "styled-components";

const Backdrop = ({ className, show, click }) => (
    show? <div onClick={click} className={className}/> : null
);

export default styled(Backdrop)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
`;
