import React from 'react';
import { shallow } from 'enzyme';
import RequestFail from '../../components/requestFail';

describe('*************** Testing the Request Fail  component ***************',()=>{
    it('Should render the reset password page correctly', ()=>{
        const wrapper = shallow( <RequestFail  /> );
        expect(wrapper).toMatchSnapshot();
    });
});