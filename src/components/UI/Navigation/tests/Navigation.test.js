import React from "react";
import { shallow } from 'enzyme';
import Navigation from "../Navigation";
import NavigationItem from "../NavigationItem";

describe('<Navigation />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Navigation />);
    });
    it('Should render 2 <NavigationItems /> if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });
    it('Should render 3 <NavigationItems /> if authenticated', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});