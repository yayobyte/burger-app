import {
    REMOVE_MESSAGES,
    SET_ERROR_MESSAGES,
    SET_SUCCESS_MESSAGES,
} from "../actionTypes.actions";

import {
    removeErrorMessages,
    setErrorMessages,
    setSuccessMessage,
} from "../userMessages.actions";

describe("User Messages actions", () => {
    it("Should set success message", () => {
        const successMessage = "success";
        const action = setSuccessMessage(successMessage);
        expect(action).toEqual({ type: SET_SUCCESS_MESSAGES, successMessage });
    });
    it("Should set error message", () => {
        const error = "error";
        const action = setErrorMessages(error);
        expect(action).toEqual({ type: SET_ERROR_MESSAGES, error });
    });
    it("Should remove messages", () => {
        const action = removeErrorMessages() ;
        expect(action).toEqual({ type: REMOVE_MESSAGES });
    });
});