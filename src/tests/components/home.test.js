import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import Home from "../../components/home";
import configureStore from "../../redux/configureStore";

describe("*************** Testing the Home  component ***************", () => {
  const store = configureStore();

    it('Should render the Home page correctly', ()=>{
        const wrapper = mount( 
            <Provider store={ store }> 
                <Home  /> 
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
