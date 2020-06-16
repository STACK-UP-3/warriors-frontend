import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../routes/index'

test('test render routes correctly',()=>{
    const wrapper = shallow(<Routes/>)
    expect(wrapper).toMatchSnapshot();
})