import { onUserLogin } from '../../../redux/actions/loginActions';
import { loginData } from '../../fixtures/login.testData';


describe('===========> Testing The Login Action <===============',()=>{
    it('Should test for the login action',()=>{
        const loginAction = onUserLogin(loginData.registeredUser);

        expect(loginAction).toEqual({
            type: 'USER_LOGIN',
            payload:  expect.anything(),
        });
    });

});