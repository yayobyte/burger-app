import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import Index from "./index";

const burgerBuilderCases = () => describe("IntTests: BurgerBuilder cases", () => {
    it("Should build a burger", async () => {
        const { getByTestId } = render(<Index />);
        const baconPlusButton = await waitForElement(() => getByTestId('button-plus-bacon'));
        const cheesePlusButton = await waitForElement(() => getByTestId('button-plus-cheese'));
        const meatPlusButton = await waitForElement(() => getByTestId('button-plus-meat'));
        const saladPlusButton = await waitForElement(() => getByTestId('button-plus-salad'));

        const orderButton = await waitForElement(() => getByTestId('order-button'))
        expect(orderButton).toBeDisabled();

        fireEvent.click(baconPlusButton);
        fireEvent.click(cheesePlusButton);
        fireEvent.click(meatPlusButton);
        fireEvent.click(saladPlusButton);
        expect(orderButton).toBeEnabled();
    })
    it("Should disable the order button when there is not ingredients added", async () => {
        const { getByTestId } = render(<Index />);
        const orderButton = await waitForElement(() => getByTestId('order-button'))
        

        const baconMinusButton = await waitForElement(() => getByTestId('button-minus-bacon'));
        const cheeseMinusButton = await waitForElement(() => getByTestId('button-minus-cheese'));
        const meatMinusButton = await waitForElement(() => getByTestId('button-minus-meat'));
        const saladMinusButton = await waitForElement(() => getByTestId('button-minus-salad'));
        fireEvent.click(baconMinusButton);
        fireEvent.click(cheeseMinusButton);
        fireEvent.click(meatMinusButton);
        fireEvent.click(saladMinusButton);
        expect(orderButton).toBeDisabled();
    });
});

export default burgerBuilderCases;
