import React from "react";
import { shallow, mount } from "enzyme";
import { Redirect } from "react-router-dom";
import Login, { LoginContainer } from "../Login";
import { SIGN_IN, SIGN_UP } from "../../../config";

const store = {
    loading: false,
    idToken: "sometoken",
    building: true,
}

const props = {
    login: jest.fn(),
    loading: store.loading,
    isAuthenticated: store.idToken !== null,
    redirectToPath: store.building ? "/checkout" : "/",
};

describe('<Login />', () => {
    it("Should redirect when is logged in", () => {
        const wrapper = shallow(<Login {...props} />);
        expect(wrapper.find(Redirect).length).toEqual(1);
    });
    it("Should show login screen", () => {
        const wrapper = shallow(<Login {...props} isAuthenticated={false} />);
        expect(wrapper.find(LoginContainer).length).toEqual(1);
    });
    it("Should switch to register screen", () => {
        const wrapper = shallow(<Login {...props} isAuthenticated={false} />);
        const button = wrapper.find("#switch-button");
        button.simulate("click");
        expect(wrapper.find("#header").text()).toEqual("Register");
    });
    it("should login", () => {
        const wrapper = mount(<Login {...props} isAuthenticated={false} />);
        const emailInput = wrapper.find("input#email-input");
        emailInput.simulate("change", { target: { value: "hello@hello.com" } })
        const passwordInput = wrapper.find("input#password-input");
        passwordInput.simulate("change", { target: { value: "password123" } })
        const loginButton = wrapper.find("#login-button").at(0);
        loginButton.simulate("click");
        expect(props.login).toHaveBeenCalledWith("hello@hello.com", "password123", SIGN_IN);
    });
    it("should register", () => {
        const wrapper = mount(<Login {...props} isAuthenticated={false} />);
        const button = wrapper.find("#switch-button").at(0);
        button.simulate("click");
        const emailInput = wrapper.find("input#email-input");
        emailInput.simulate("change", { target: { value: "hello@hello.com" } })
        const passwordInput = wrapper.find("input#password-input");
        passwordInput.simulate("change", { target: { value: "password123" } })
        const loginButton = wrapper.find("#login-button").at(0);
        loginButton.simulate("click");
        expect(props.login).toHaveBeenCalledWith("hello@hello.com", "password123", SIGN_UP);
    });
});
