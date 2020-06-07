import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import EditTrip from '../../components/editTripRequest';
import configureStore from '../../redux/configureStore';

describe('*************** Testing the EditTrip  component ***************',()=>{
    const store = configureStore();

    it('Should render the EditTrip page correctly', ()=>{
        const wrapper = mount( 
            <Provider store={ store }> 
                <EditTrip  match={{params:{id:1}}}/> 
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
