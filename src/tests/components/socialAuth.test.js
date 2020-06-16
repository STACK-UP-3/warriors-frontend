import React from 'react';
import { mount } from 'enzyme';
import SocialAuth from '../../components/socialAuth';

let wrapper,handler;
const { location } = window;

beforeAll(()=>{
    wrapper = mount(<SocialAuth />);
    delete window.location;
    window.location = { assign : jest.fn() }
})

afterAll(() => {
    window.location = location;
});

test('should render correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})
 
test('should simulate click on google',()=>{
    wrapper.find('#google').simulate('click')
    expect(window.location.assign).toHaveBeenCalled()
}) 

test('should simulate click on facebook',()=>{
    wrapper.find('#facebook').simulate('click')
    expect(window.location.assign).toHaveBeenCalled()
})
