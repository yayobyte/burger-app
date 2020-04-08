import {
    REMOVE_MESSAGES,
    SET_ERROR_MESSAGES,
    SET_SUCCESS_MESSAGES,
} from "./actionTypes.actions";

export const removeErrorMessages = () => ({
    type: REMOVE_MESSAGES,
});

export const setErrorMessages = (error) => ({
    type: SET_ERROR_MESSAGES,
    error,
});

export const setSuccessMessage = (successMessage) => ({
    type: SET_SUCCESS_MESSAGES,
    successMessage,
});
