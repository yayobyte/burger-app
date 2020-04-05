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

const withUserMessages = ( WrappedComponent, stateSlice ) => (
    (props) => {
        const { loading, error, successMessage } = props[stateSlice];
        const [ openModal, setOpenModal ] = useState(false);
        useEffect(() => {
            setOpenModal(!!error);
        }, [error]);
        useEffect(() => {
            setOpenModal(!!successMessage);
        }, [successMessage]);
        const closeModal = () => {
            setOpenModal(null);
        };
        return (
            <Hoc>
                {openModal &&
                    <Modal onCancel={closeModal} show={openModal}>
                        {error && (
                            <ErrorContainer>
                                <h3 style={{ color: "#650000"}}>Oops we got an error!</h3>
                                <p>{error.message}</p>
                                <hr />
                                <div className="actions">
                                    <Button className='danger' click={closeModal}>Close</Button>
                                </div>
                            </ErrorContainer>
                        )}
                        {successMessage && (
                            <ErrorContainer style={{ color: "#295F00"}}>
                                <h3>Success!</h3>
                                <p>{successMessage}</p>
                                <hr />
                                <div className="actions">
                                    <Button className='success' click={closeModal}>Close</Button>
                                </div>
                            </ErrorContainer>
                        )}
                    </Modal>
                }
                {loading &&
                    <Modal onCancel={() => null} show={loading}>
                        <Spinner />
                    </Modal>
                }
                <WrappedComponent { ...props} />
            </Hoc>
        );
    }
);

export default withUserMessages;
