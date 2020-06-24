import React from 'react';
import { shallow } from 'enzyme';
// Component to be tested
import Sidenav from './index';

describe('>>> Testing the Sidenav container', () => {
  it("should display a user's name", () => {
    const wrapper = shallow(<Sidenav />);

    const userName = wrapper.find('span.name');

    expect(userName.text()).toBe('John Doe');
  });
});
