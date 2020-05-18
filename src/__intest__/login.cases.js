import React from "react";
import { render, waitForElement } from "@testing-library/react";
import Index from "./index";

const loginCases = () => describe("IntTests: BurgerBuilder cases", () => {
    it("Should show login screen", async () => {
        const { getByTestId } = render(<Index />);
        const orderButton = await waitForElement(() => getByTestId('order-button'));
        expect(orderButton).toBeDisabled();
    })
});

export default loginCases;
