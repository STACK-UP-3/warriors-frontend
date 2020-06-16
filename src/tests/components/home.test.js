import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/home';

test('should render the landing page correctly',()=>{
    const wrapper = shallow(<Home/>)
    expect(wrapper).toMatchSnapshot(); 
})
