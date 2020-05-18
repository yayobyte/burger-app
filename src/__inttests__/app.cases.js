import { waitForElement } from "@testing-library/react";
import renderApp from "./bootstrapper";

const appCases = () => describe("IntTests: App Cases", () => {
    it("Loads the app without crashing", async () => {
        const { getByTestId } = renderApp();
        const orderButton = await waitForElement(() => getByTestId('order-button'))
        expect(orderButton).toBeDefined();
    });
});

export default appCases;
