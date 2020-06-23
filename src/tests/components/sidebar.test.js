import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import MobileSidebar from '../../components/common/mobileSidebar';
import SideMenu from '../../components/common/sideMenu';
import SideInit from '../../components/common/SideInitializer';

describe('Test <Sidebar/> Component', () => {
  it('Should render Mobile Sidebar correctly', () => {
    const mobSide = shallow(<MobileSidebar />);
    expect(toJson(mobSide)).toMatchSnapshot();
  });
  it('Should render Sidemenu correctly', () => {
    const sideMenu = shallow(<SideMenu />);
    expect(toJson(sideMenu)).toMatchSnapshot();
  });
  it('Should render Side Initializer correctly', () => {
    const sideInit = shallow(<SideInit />);
    expect(toJson(sideInit)).toMatchSnapshot();
  });
});
