import React from 'react';
import { shallow } from 'enzyme';
import {SendResetEmail,mapStateToProps} from '../../components/SendResetEmail';
let sendResetEmail;

describe('*************** Testing the Send resetpasword email link  component ***************',()=>{
    const props={isResetPasswordSent:true,sendResetEmail:jest.fn()};
    beforeAll(()=>{
        sendResetEmail=shallow(<SendResetEmail {...props}/>)
    })

    it('Should render the reset password page correctly', ()=>{
        sendResetEmail.instance()
        .componentWillReceiveProps({isResetPasswordSent:true});
        sendResetEmail.instance().handleEmailChange({target:{value:'imbikj'}})
        sendResetEmail.instance().handleSendEmailResetLink()
        expect(sendResetEmail).toMatchSnapshot();

    });
    it('Should send states to props', ()=>{
        expect(typeof mapStateToProps({ resetPassword:{isResetLinkSent:true} })).toBe("object");

    });
});