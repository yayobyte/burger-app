import React from "react";
import { render, waitForElement } from "@testing-library/react";
import Index from "./index";

const appCases = () => describe("IntTests: App Cases", () => {
    it("Loads the app without crashing", async () => {
        const { getByTestId } = render(<Index />);
        const orderButton = await waitForElement(() => getByTestId('order-button'))
        expect(orderButton).toBeDefined();
    });
});

export default appCases;
