import React from 'react';
import styled from 'styled-components';
import Backdrop from "./Backdrop";

const ModalContainer = styled.div`
    .modal {
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 10px 10px 10px rgba(20,20,20,0.4);
        padding: 16px;
        left: 15%;
        top: 20%;
        box-sizing: border-box;
        transition: all 0.3s ease-in-out;
    }
    
    @media (min-width: 600px) {
        .modal {
            width: 500px;
            left: calc(50% - 250px);
        }
    }
`;

const Modal = ({ children, show, onCancel }) => {
    return (
        <ModalContainer>
            <Backdrop show={show} click={onCancel}/>
            <div
                style={{
                    transform: show? 'translateY(0)' : "translateY(-100vh)",
                    opacity: show? '1' : '0',
                }}
                className="modal">{children}</div>
        </ModalContainer>
    );
};

export default Modal;