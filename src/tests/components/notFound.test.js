import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/noFound';

describe('*************** Testing the Not Found  component ***************',()=>{
    it('Should render the reset password page correctly', ()=>{
        const wrapper = shallow( <NotFound  title={'item'} /> );
        expect(wrapper).toMatchSnapshot();
    });
});