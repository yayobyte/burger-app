import React from 'react';
import { NavLink } from "react-router-dom";
import { shallow } from 'enzyme';
import NavigationItem from "../NavigationItem";

describe('<NavigationItem />', () => {
    const children = <div>Hello</div>;
    const link = "/link-test";
    const exact = true;
    const wrapper = shallow(<NavigationItem children={children} exact={exact} link={link} />)
    it('Should show a <NavLink />', () => {
        expect(wrapper.contains(
            <NavLink to={link} activeClassName="Active" exact={exact}>
                {children}
            </NavLink>
        )).toBeTruthy();
    });
})