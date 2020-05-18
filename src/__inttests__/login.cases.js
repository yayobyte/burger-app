import { waitForElement, fireEvent } from "@testing-library/react";
import renderApp from "./bootstrapper";

const login = async () => {
    const { queryAllByTestId, getByTestId, getAllByText } = renderApp();
    const loginLink = await waitForElement(() => queryAllByTestId("nav-login"));
    fireEvent.click(loginLink[0]);
    const loginHeader = await waitForElement(() => getByTestId('login-header'));
    expect(loginHeader.innerHTML).toEqual("Login");
    const username = await waitForElement(() => document.getElementById('email-input'));
    const password = await waitForElement(() => document.getElementById('password-input'));
    fireEvent.change(username, { target: { value: "inttest@gmail.com" }});
    fireEvent.change(password, { target: { value: "12345678" }});
    const loginButton = await waitForElement(() => getByTestId('login-button'));
    fireEvent.click(loginButton);
    const closeModalButton = await waitForElement(() => getAllByText('Close'))
    fireEvent.click(closeModalButton[0]);
    const orderButton = await waitForElement(() => getByTestId('order-button'));
    expect(orderButton).toBeDefined();
};

const loginCases = () => describe("IntTests: Login cases", () => {
    it("Should show login screen", async () => {
        const { getByTestId } = renderApp();
        const orderButton = await waitForElement(() => getByTestId('order-button'));
        expect(orderButton).toBeDisabled();
    });
    it("Should show register screen", async () => {
        const { queryAllByTestId, getByTestId } = renderApp();
        const loginLink = await waitForElement(() => queryAllByTestId("nav-login"));
        fireEvent.click(loginLink[0]);
        const loginHeader = await waitForElement(() => getByTestId('login-header'));
        expect(loginHeader.innerHTML).toEqual("Login");
        const switchToRegisterButton = await waitForElement(() => getByTestId('btn-switch-to-register'));
        fireEvent.click(switchToRegisterButton);
        const registerHeader = await waitForElement(() => getByTestId('register-header'));
        expect(registerHeader.innerHTML).toEqual("Register");
    });
    it("Should login", async () => {
        await login();
    });
});

export default loginCases;
