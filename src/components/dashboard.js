import React from 'react';
import Header from './common/header';
import SideMenu from './common/sideMenu';
import MobileSidebar from './common/mobileSidebar';
import Footer from './footer';
import SideInit from './common/SideInitializer';

export default () => {
  return (
    <div>
      <Header />
      <div className='onewayTripContainer'>
        <div className='fixed-sidebar container center hide-on-med-and-down'>
          <SideMenu />
        </div>
        <div className='show-on-med-and-down container center'>
          <MobileSidebar />
        </div>
        <div className='content container center'>
          <h5>Welcome to your Dashboard</h5>
        </div>
      </div>
      <SideInit />
      <Footer />
    </div>
  );
};
