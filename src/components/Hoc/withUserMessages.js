import React, { useState, useEffect}  from 'react';
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Hoc from "./Hoc";
import { successColor, errorColor } from "../../config/theme";
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
                    <ErrorContainer style={{ color: errorColor, textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            align="center"
                        >
                            Error!
                        </Typography>
                        <br />
                        <Typography variant="body1">We got an error</Typography>
                        <Typography variant="body1">{`${error && error.code} - ${error && error.message}`}</Typography>
                        <hr />
                        <div className="actions">
                            <Button
                                onClick={closeModal}
                                variant="outlined"
                                color="secondary"
                            >
                                Close
                            </Button>
                        </div>
                    </ErrorContainer>
                </Modal>
                <Modal onCancel={closeModal} show={openModal && !!successMessage}>
                    <ErrorContainer style={{ color: successColor, textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            align="center"
                        >
                            Success!
                        </Typography>
                        <br />
                        <Typography variant="body1">{successMessage}</Typography>
                        <hr />
                        <div className="actions">
                            <Button
                                onClick={closeModal}
                                variant="outlined"
                                color="secondary"
                            >
                                Close
                            </Button>
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
