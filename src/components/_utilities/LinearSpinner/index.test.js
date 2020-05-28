import React from 'react';
import { shallow } from 'enzyme';
// Utils
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';
// Components to be tested
import LinearSpinner from './index';

const initialise = (props = {}) => {
  const component = shallow(<LinearSpinner {...props} />);
  return component;
};

describe('>>> Testing the Linear Spinner component', () => {
  let component;
  beforeEach(() => {
    component = initialise();
  });

  /**
   * Tests
   */

  it('should render the component successfully', () => {
    const wrapper = findNodeByTestAttr(component, 'component--spinner-linear');
    expect(wrapper.length).toBe(1);
  });
});
