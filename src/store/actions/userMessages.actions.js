import {
    REMOVE_MESSAGES,
    SET_ERROR_MESSAGES,
    SET_SUCCESS_MESSAGES,
} from "./actionTypes.actions";

const removeErrorMessages = () => ({
    type: REMOVE_MESSAGES,
});

const setErrorMessages = (error) => ({
    type: SET_ERROR_MESSAGES,
    error,
});

const setSuccessMessage = (successMessage) => ({
    type: SET_SUCCESS_MESSAGES,
    successMessage,
});

export {
    removeErrorMessages,
    setErrorMessages,
    setSuccessMessage,
}