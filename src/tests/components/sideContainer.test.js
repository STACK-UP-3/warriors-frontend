import React from 'react';
import { shallow } from 'enzyme';
import SideContainer from '../../components/auth/SideContainer';

describe('*************** Testing the SideContainer  component ***************', () => {
  it('Should render the SideContainer page correctly', () => {
    const wrapper = shallow(
      <SideContainer title='Welcome to BR' subtitle='signup here' />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
