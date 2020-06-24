import React from 'react';
import { shallow } from 'enzyme';
// Components to be tested
import Intro from './index';
// Utils
import { findNodeByTestAttr } from '../../../utils/findNodeByTestAttr';

const initialise = (props = {}) => {
  const component = shallow(<Intro {...props} />);
  return component;
};

describe('>>> Testing the Intro component', () => {
  let component;
  beforeEach(() => {
    component = initialise({ title: 'Page Intro Title' });
  });

  /**
   * Tests
   */

  it('should render the component successfully', () => {
    const wrapper = findNodeByTestAttr(component, 'page-content-heading');
    expect(wrapper.length).toBe(1);
  });

  it('should display page title', () => {
    const pageTitle = findNodeByTestAttr(component, 'page-title');
    expect(pageTitle.text()).toBe('Page Intro Title');
  });
});
