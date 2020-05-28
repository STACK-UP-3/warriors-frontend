import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../../App';

describe('Test <App/> Component', () => {
  const component = shallow(<App />);
  it('Should render App', () => {
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
