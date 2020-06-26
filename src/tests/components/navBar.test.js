import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Navbar from '../../components/navBar';
import configureStore from '../../redux/configureStore';

describe('*************** Testing the Navbar  component ***************',()=>{
    const store = configureStore();

    it('Should render the Navbar page correctly', ()=>{
        const wrapper = mount( 
            <Provider store={ store }> 
                <Navbar  /> 
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
