import React from 'react';
import { shallow } from 'enzyme';
// Components to be tested
import Dashboard from './index';
import Header from '../../blocks/Header';
import Sidebar from '../../blocks/Sidebar';
import Footer from '../../blocks/Footer';

describe('>>> Testing the Dashboard layout container', () => {
  it('should display layout sub-components: Header, Sidebar, Footer', () => {
    // Create a shallow render of the parent node/component
    const wrapper = shallow(
      <Dashboard>
        <h1>Children</h1>
      </Dashboard>,
    );

    // Find specific elements rendered in the component
    const layoutHeader = wrapper.find(Header);
    const layoutSidebar = wrapper.find(Sidebar);
    const layoutFooter = wrapper.find(Footer);

    // Declare assertions
    expect(layoutHeader.exists()).toBe(true);
    expect(layoutSidebar.exists()).toBe(true);
    expect(layoutFooter.exists()).toBe(true);
  });
});
