import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./bootstrapper";
import { buildBurger } from "./burgerBuilder.cases";

const checkoutCases = () => describe("IntTests: Checkout cases", () => {
    it("Should fill checkout information", async () => {
        const { getByTestId, getAllByText } = renderApp();

        const name = await waitForElement(() => document.getElementById('name-input'));
        const street = await waitForElement(() => document.getElementById('street-input'));
        const zipcode = await waitForElement(() => document.getElementById('zipcode-input'));
        const country = await waitForElement(() => document.getElementById('country-input'));
        const orderButton = await waitForElement(() => getByTestId('set-order'));

        //Fill form with errors
        fireEvent.change(name, { target: { value: "Int Test name" }});
        fireEvent.change(street, { target: { value: "Int Test Street" }});
        fireEvent.change(zipcode, { target: { value: "123" }}); //Min validation not meet
        fireEvent.change(country, { target: { value: "UAE" }});
        expect(orderButton).toBeDisabled();

        //Correct the validation error
        fireEvent.change(zipcode, { target: { value: "12345" }});
        expect(orderButton).toBeEnabled();

        // Purchase Burger
        fireEvent.click(orderButton);

        //Modal
        const closeModalButton = await waitForElement(() => getAllByText('Close'));
        expect(closeModalButton[0]).toBeDefined();
        fireEvent.click(closeModalButton[0]);
    });
    it("Should cancel checkout", async () => {
        await buildBurger();

        //Order Now
        const { getByTestId, getAllByText } = renderApp();
        const orderButton = await waitForElement(() => getAllByText('ORDER NOW'));
        fireEvent.click(orderButton[0]);

        //Continue to checkout
        const continueButton = await waitForElement(() => getByTestId('continue-summary-button'));
        fireEvent.click(continueButton);

        //Cancel order
        const cancelOrderButton = await waitForElement(() => getByTestId('cancel-order'));
        fireEvent.click(cancelOrderButton);
    });
});

export default checkoutCases;
