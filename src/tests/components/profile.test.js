import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Profile from '../../components/profile';
import { Router } from 'react-router-dom';

let wrapper,onChangeHandler,TokenSignIn,history,onSubmit,store,authData;

beforeEach(()=>{
    onSubmit = jest.fn()
    onChangeHandler = jest.fn()
    history = { push:jest.fn() }
    TokenSignIn = jest.fn()
    authData = jest.fn()
})

test('Should render correctly',()=>{
    store = mockStore([thunk])({
        loginData: {
            loading: false,
            userInfo: {
                firstname:'kwizera',
                lastname:"christophe",
                bio:"love basketball",
                gender:"Male",
                birthdate:"2020-06-11",
                telephone:'250784824295'
            },
            error: null
        }, 
    });
    wrapper = mount(
        <Provider store={store}>
            <Router>
                <Profile authData={authData} history={history}/>
            </Router>
        </Provider>
        )
    expect(wrapper).toMatchSnapshot();
})

// test('Handler change',()=>{
//     wrapper.find()
// })
