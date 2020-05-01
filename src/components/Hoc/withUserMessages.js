import React, { useState, useEffect}  from 'react';
import styled from "styled-components";
import Hoc from "./Hoc";
import { Modal, Button, Spinner } from "../UI";

const ErrorContainer = styled.div`
    hr {
        background-color: #CCC;
        border: none;
        height: 1px;
    }
    .actions {
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
    }
`;

const withUserMessages = (WrappedComponent) => (
    (props) => {
        const { loading, error, successMessage, removeMessages } = props;
        const [ openModal, setOpenModal ] = useState(false);
        useEffect(() => {
            setOpenModal(!!error || !!successMessage);
        }, [error, successMessage]);
        const closeModal = () => {
            removeMessages();
            setOpenModal(null);
        };
        return (
            <Hoc>
                <Modal onCancel={closeModal} show={openModal && !!error}>
                    <ErrorContainer style={{ color: "#650000"}} >
                        <h3>Oops we got an error!</h3>
                        <p>{`${error && error.code} - ${error && error.message}`}</p>
                        <hr />
                        <div className="actions">
                            <Button className='danger' click={closeModal}>Close</Button>
                        </div>
                    </ErrorContainer>
                </Modal>
                <Modal onCancel={closeModal} show={openModal && !!successMessage}>
                    <ErrorContainer style={{ color: "#295F00"}}>
                        <h3>Success!</h3>
                        <p>{successMessage}</p>
                        <hr />
                        <div className="actions">
                            <Button className='success' click={closeModal}>Close</Button>
                        </div>
                    </ErrorContainer>
                </Modal>
                <Modal onCancel={() => null} show={loading}>
                    <Spinner />
                </Modal>
                <WrappedComponent { ...props} />
            </Hoc>
        );
    }
);

export default withUserMessages;
