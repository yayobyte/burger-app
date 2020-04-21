import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from "react-transition-group";
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
    }
    
    .modal-open {
      animation: openModal ${({timing}) => timing}ms ease-out forwards;
    }
    
    .modal-close {
      animation: closeModal ${({timing}) => timing}ms ease-in forwards;
    }
    
    @keyframes openModal {
      0% {
        opacity: 0;
        transform: translateY(-100%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes closeModal {
      0% {
        opacity: 1;
        transform: translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateY(-100%);
      }
    }
    
    .backdrop-open {
      animation: openBackdrop ${({timing}) => timing}ms ease-out forwards;
    }
    
    .backdrop-close {
      animation: closeBackdrop ${({timing}) => timing}ms ease-in forwards;
    }
    
    @keyframes openBackdrop {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    
    @keyframes closeBackdrop {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
    
    @media (min-width: 600px) {
        .modal {
            width: 500px;
            left: calc(50% - 250px);
        }
    }
`;

const Modal = ({ children, show, onCancel }) => {
    const timing = 300;
    const modalClasses = {
        enterActive: "modal-open",
        exitActive: "modal-close",
    }
    const backdropClasses = {
        enterActive: "backdrop-open",
        exitActive: "backdrop-close",
    };
    return (
        <ModalContainer timing={timing}>
            <Backdrop click={onCancel}/>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={show}
                timeout={timing}
                classNames={backdropClasses}
            >
                <Backdrop click={onCancel} show />
            </CSSTransition>
            <CSSTransition
                mountOnEnter
                unmountOnExit
                in={show}
                timeout={timing}
                classNames={modalClasses}
            >
                <div className="modal">
                    {children}
                </div>
            </CSSTransition>
        </ModalContainer>
    );
};

export default Modal;