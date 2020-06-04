import React from 'react';
import { shallow } from 'enzyme';
import ResetPassword from '../../components/resetPassword';

describe('*************** Testing the ResetPassword  component ***************',()=>{
    it('Should render the reset password page correctly', ()=>{
        const wrapper = shallow( <ResetPassword  /> );
        expect(wrapper).toMatchSnapshot();
    });
});
