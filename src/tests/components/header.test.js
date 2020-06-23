import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from '../../components/common/header';

describe('Test <Header/> Component', () => {
  it('Should render Header correctly', () => {
    const header = shallow(<Header />);
    expect(toJson(header)).toMatchSnapshot();
  });
});
