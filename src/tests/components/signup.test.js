import React from 'react';
import { shallow } from 'enzyme';
import Signup from '../../components/signup';

describe('*************** Testing the Signup  component ***************',()=>{
    it('Should render the reset password page correctly', ()=>{
        const wrapper = shallow( <Signup  /> );
        expect(wrapper).toMatchSnapshot();
    });
});