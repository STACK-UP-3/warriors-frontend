import React from 'react';
import { shallow } from 'enzyme';
// Components to be tested
import Header from './index';

describe('>>> Testing the Header container', () => {
  it('should display app brand name', () => {
    const wrapper = shallow(<Header />);

    const brandName = wrapper.find('.brand-logo span');

    expect(brandName.text()).toBe('Barefoot Nomad');
  });
});
