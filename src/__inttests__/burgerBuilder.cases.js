import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./bootstrapper";

export const buildBurger = async () => {
    const { getByTestId } = renderApp();
    const baconPlusButton = await waitForElement(() => getByTestId('button-plus-bacon'));
    const cheesePlusButton = await waitForElement(() => getByTestId('button-plus-cheese'));
    const meatPlusButton = await waitForElement(() => getByTestId('button-plus-meat'));
    const saladPlusButton = await waitForElement(() => getByTestId('button-plus-salad'));

    const orderButton = await waitForElement(() => getByTestId('order-button'))

    fireEvent.click(baconPlusButton);
    fireEvent.click(cheesePlusButton);
    fireEvent.click(meatPlusButton);
    fireEvent.click(saladPlusButton);
    expect(orderButton).toBeEnabled();
};

const burgerBuilderCases = () => describe("IntTests: BurgerBuilder cases", () => {
    it("Should build a burger", async () => {
        await buildBurger();
    })
    it("Should disable the order button when there is not ingredients added", async () => {
        const { getByTestId } = renderApp();
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
    it("Should show a summary of the order", async () => {
        const { getByTestId } = renderApp();
        const baconPlusButton = await waitForElement(() => getByTestId('button-plus-bacon'));
        const cheesePlusButton = await waitForElement(() => getByTestId('button-plus-cheese'));

        const orderButton = await waitForElement(() => getByTestId('order-button'));
        expect(orderButton).toBeDisabled();

        //Add some ingredients and click Order Button
        fireEvent.click(baconPlusButton);
        fireEvent.click(cheesePlusButton);
        expect(orderButton).toBeEnabled();
        fireEvent.click(orderButton);

        //Go back to builder and open again the modal confirmation
        const cancelButton = await waitForElement(() => getByTestId('cancel-summary-button'));
        fireEvent.click(cancelButton);
        fireEvent.click(orderButton);

        //Continue to checkout
        const continueButton = await waitForElement(() => getByTestId('continue-summary-button'));
        fireEvent.click(continueButton);
    });
});

export default burgerBuilderCases;
