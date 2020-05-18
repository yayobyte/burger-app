import { fireEvent, waitForElement } from "@testing-library/react";
import renderApp from "./bootstrapper";

const logoutCases = () => describe("IntTests: Logout cases", () => {
    it("Should logout", async () => {
        const { queryAllByTestId, getAllByText } = renderApp();
        const logoutLink = await waitForElement(() => queryAllByTestId("nav-logout"));
        fireEvent.click(logoutLink[0]);
        const closeModalButton = await waitForElement(() => getAllByText('Close'))
        fireEvent.click(closeModalButton[0]);
    });
});

export default logoutCases;
