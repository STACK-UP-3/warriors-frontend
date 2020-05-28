import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Home } from '../../components/Home';

describe('Test <Home/> Component', () => {
  const home = shallow(<Home />);
  it('Should render Home component', () => {
    expect(home.length).toBe(1);
    expect(toJson(home)).toMatchSnapshot();
    expect(home.find('a').length).toBe(2);
  });
});
