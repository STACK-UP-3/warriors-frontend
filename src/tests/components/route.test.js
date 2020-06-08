import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppRoute from '../../routes/index';

describe('Test <AppRoute/> componet', () => {
  const component = shallow(<AppRoute />);
  it('Should render AppRoute', () => {
    expect(component.length).toBe(1);
    expect(toJson(component)).toMatchSnapshot();
  });
});
