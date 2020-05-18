import { fireEvent, waitForElement } from "@testing-library/react";
import renderApp from "./bootstrapper";

const orderCases = () => describe("IntTests: Orders cases", () => {
    it("Should show orders", async () => {
        const { queryAllByTestId, getAllByText } = renderApp();

        //Go to orders
        const loginLink = await waitForElement(() => queryAllByTestId("nav-orders"));
        fireEvent.click(loginLink[1]);

        const ingredientsHeader = await waitForElement(() => getAllByText('Ingredients:'))
        expect(ingredientsHeader.length).toBeGreaterThan(0);
    });
});

export default orderCases;
