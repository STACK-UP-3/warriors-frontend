import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/dashboard';

describe('*************** Testing the Dashboard  component ***************',()=>{
    it('Should render the dashboard page correctly', ()=>{
        const wrapper = shallow( <Dashboard  /> );
        expect(wrapper).toMatchSnapshot();
    });
});