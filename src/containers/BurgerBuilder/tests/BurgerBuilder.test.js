import React from "react";
import { shallow } from "enzyme";
import BurgerBuilder from "../BurgerBuilder";
import BuildControls from "../../../components/BuildControls";

const props = {
    addIngredient : () => null,
    deleteIngredient: () => null,
    initIngredients: () => null,
    totalPrice : 10,
    history: {},
    ingredients: {},
    isAuthenticated: false,
};

describe('<BurgerBuilder />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder {...props} />);
    });
    it("Should render burger builder", () => {
        expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
});
