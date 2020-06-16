import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from '../../components/login';
import configureStore from '../../redux/configureStore';
import LoginForm from '../../components/loginForm';
import {tokenData} from '../fixtures/login.testData';

describe('*************** Testing the Login  component ***************',()=>{

    const store = configureStore();
    let onFormSubmit;
    const { location } = window;

    beforeEach(()=>{
        onFormSubmit = jest.fn();
        delete window.location;
        localStorage.removeItem("token");
		window.location = { assign: jest.fn(),search:'' };
    });

    afterAll(() => {
		window.location = location;
        expect(localStorage.getItem).toHaveBeenCalled()
    });
    
    it('Should render the login page correctly', ()=>{
        window.location = { assign: jest.fn(), search : `?token=${tokenData}` };
        const store = mockStore([thunk])({
            loginData: {
                loading: false,
                userInfo: {
                    status: 200,
                    message: 'You have signed in successfully',
                    data:{
                       access_token: tokenData,
                    }
                },
                error: null
            }, 
        });

        const  wrapper = mount(
            <Provider store={ store }> 
                <Login />
            </Provider> 
        );

        const handleSubmit = jest.spyOn(wrapper.find('[testdata="loginForm"]').props(), 'onSubmit');
        wrapper.find('[testdata="loginForm"]').props().onSubmit();
        expect(wrapper).toMatchSnapshot();
        expect(handleSubmit).toHaveBeenLastCalledWith();
    });

    it('should submit upon form call',() => {
       const onSubmitSpy = jest.fn();
       const wrapper = mount(
            <Provider store={ store }> 
                <LoginForm  onSubmit={ onSubmitSpy } userInfo={ { message: 'Test message' } }/>
            </Provider> 
        );

        expect(wrapper).toMatchSnapshot();

        wrapper.find('input').at(0).simulate('change',{ 
                target: { id: 'email', value: 'xxx@yyy.zzz'} 
               });
               
       wrapper.find('input').at(1).simulate('change',{ 
                target: { id: 'password', value: 'kkkkkkkk'} 
               });

            wrapper.find('form').simulate('submit',{
                preventDefault: ()=>{},
            });

        expect(onSubmitSpy).toBeCalled();
    });

    it('Should test form inputs on change and forgot password',() => {
        const testState = { email: 'aaa@bbbb.ccc', password:'jjjjjjj' }
        const wrapper = mount(
             <Provider store={ store }> 
                 <LoginForm  
                  email={ testState.email }
                  password={ testState.password }
                  history = { { push: path => path } }
                  userInfo={ { message: 'Test message' } }
                  />
             </Provider> 
         );

        wrapper.find('input').at(0).simulate('change',{ 
                 target: { id: 'email', value: 'xxx@yyy.zzz'} 
                });
                
        wrapper.find('input').at(1).simulate('change',{ 
                 target: { id: 'password', value: 'kkkkkkkk'} 
                });

        wrapper.find('span').at(0).simulate('click');

        expect(window.location.assign).toHaveBeenCalled();
        
     })

     it('Should test if Fetch does not work',() => {
        const store = mockStore([thunk])({
            loginData: {
                loading: true,
                userInfo: { },
                error: 'TypeError: Failed to fetch',
            }, 
        });

        const wrapper = mount(
             <Provider store={ store }> 
                 <Login />
             </Provider> 
         );

         wrapper.find('h4').simulate('click');

         wrapper.find('form').simulate('submit',{
            preventDefault: ()=>{},
        });

        expect(window.location.assign).toHaveBeenCalled();
        
     })
});
