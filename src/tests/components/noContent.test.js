import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import NoContent from '../../components/noContentFound';
import configureStore from '../../redux/configureStore';

describe('*************** Testing the NoContent  component ***************',()=>{
    const store = configureStore();

    it('Should render the NoContent page correctly', ()=>{
        const wrapper = mount( 
            <Provider store={ store }> 
                <NoContent  /> 
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
