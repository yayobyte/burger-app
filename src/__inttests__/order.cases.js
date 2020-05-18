import { fireEvent, render, waitForElement } from "@testing-library/react";
import Index from "./index";
import React from "react";

const orderCases = () => describe("IntTests: Orders cases", () => {
    it("Should show orders", async () => {
        const { queryAllByTestId, getAllByText } = render(<Index />);

        //Go to orders
        const loginLink = await waitForElement(() => queryAllByTestId("nav-orders"));
        fireEvent.click(loginLink[1]);

        const ingredientsHeader = await waitForElement(() => getAllByText('Ingredients:'))
        expect(ingredientsHeader.length).toBeGreaterThan(0);
    });
});

export default orderCases;
