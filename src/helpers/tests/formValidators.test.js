import { checkFormValidity } from "../formValidators";

describe("Helpers: Form Validators", () => {
    it("Should return null when no form is passed in", () => {
        expect(checkFormValidity(null)).toBeNull();
    });
});
