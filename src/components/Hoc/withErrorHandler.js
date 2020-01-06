import React, { useState, useEffect}  from 'react';
import styled from "styled-components";
import Hoc from "./Hoc";
import Modal from "../UI/Modal";
import instance from "../../server";
import Button from "../UI/Button";

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

const withErrorHandler = ( WrappedComponent ) => (
    (props) => {
        const [ errorState, setErrorState ] = useState(null);
        useEffect(() => {
            const reqInterceptor = instance.interceptors.request.use((request) => {
                setErrorState(null);
                return request;
            });
            const resInterceptor = instance.interceptors.response.use(res => res, error => {
                setErrorState(error);
                return error;
            });
            return (() => {
                instance.interceptors.response.eject(resInterceptor);
                instance.interceptors.request.eject(reqInterceptor);
            });
        }, [errorState]);
        const closeModal = () => {
            setErrorState(null);
        };
        return (
            <Hoc>
                {errorState &&
                    <Modal onCancel={closeModal} show={errorState}>
                        <ErrorContainer>
                            <h3>Oops we got an error!</h3>
                            <p>{errorState.message}</p>
                            <hr />
                            <div className="actions">
                                <Button className='success' click={closeModal}>Close</Button>
                            </div>
                        </ErrorContainer>
                    </Modal>
                }
                <WrappedComponent { ...props} />
            </Hoc>
        );
    }
);

export default withErrorHandler;