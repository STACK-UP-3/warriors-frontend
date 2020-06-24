import React from 'react';
import { shallow } from 'enzyme';
// Utils
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
// Components to be tested
import CircularSpinner from './index';

const initialise = (props = {}) => {
  const component = shallow(<CircularSpinner {...props} />);
  return component;
};

describe('>>> Testing the Circular Spinner component', () => {
  let component;
  beforeEach(() => {
    component = initialise();
  });

  /**
   * Tests
   */

  it('should render the component successfully', () => {
    const wrapper = findNodeByTestAttr(
      component,
      'component--spinner-circular',
    );
    expect(wrapper.length).toBe(1);
  });
});
