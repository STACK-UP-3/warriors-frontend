import React from 'react';
import { shallow } from 'enzyme';
// Components to be tested
import Footer from './index';

describe('>>> Testing the Footer container', () => {
  it('should display a copyright notice', () => {
    const wrapper = shallow(<Footer />);

    const copyrightNotice = wrapper.find('#copyright');

    expect(copyrightNotice.text()).toBe(
      'Copyright © 2020 Warriorz Team @ Andela Kigali Stack-Up 3',
    );
  });
});
