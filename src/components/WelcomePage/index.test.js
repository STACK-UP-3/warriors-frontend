import React from 'react';
import { shallow } from 'enzyme';
// Component to be tested
import WelcomePage from './index';

describe('>>> Testing the Welcome Page component', () => {
  it('Should display page title', () => {
    // Setup a shallow render of the component
    const wrapper = shallow(<WelcomePage />);
    // Find elements rendered in the component
    const pageTitle = wrapper.find('.page-title');
    // Declare assertions
    expect(pageTitle.text()).toBe('Welcome to Your Dashboard');
  });

  // it('Should open Roles page when link is clicked', () => {
  //   const wrapper = shallow(<WelcomePage />);
  //   const linkToRolesPage = wrapper.find('.link-roles');

  //   // Declare assertions
  //   expect(linkToRolesPage.text()).toBe('View User Roles');
  // });
});
