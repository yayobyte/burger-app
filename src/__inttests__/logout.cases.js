import {fireEvent, render, waitForElement} from "@testing-library/react";
import Index from "./index";
import React from "react";

const logoutCases = () => describe("IntTests: Logout cases", () => {
    it("Should logout", async () => {
        const { queryAllByTestId, getAllByText } = render(<Index />);
        const logoutLink = await waitForElement(() => queryAllByTestId("nav-logout"));
        fireEvent.click(logoutLink[0]);
        const closeModalButton = await waitForElement(() => getAllByText('Close'))
        fireEvent.click(closeModalButton[0]);
    });
});

export default logoutCases;
