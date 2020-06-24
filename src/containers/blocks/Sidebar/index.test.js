import React from 'react';
import { shallow } from 'enzyme';
// Component to be tested
import Sidebar from './index';

describe('>>> Testing the Sidebar container', () => {
  it('should display button for editing user profile', () => {
    const wrapper = shallow(<Sidebar />);

    const btnEditProfile = wrapper.find('button');

    expect(btnEditProfile.text()).toBe('Edit Profile');
  });
});
