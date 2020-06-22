import React from 'react';
import Header from '../common/header';
import SideMenu from '../common/sideMenu';
import MobileSidebar from '../common/mobileSidebar';
import Footer from '../footer';
import OnewayTripForm from './onewayTripForm';

export default () => {
  /* istanbul ignore next */
  !window.localStorage.getItem('token')
    ? window.location.assign('/login')
    : null;
  return (
    <div>
      <div className='onewayTripContainer'>
        <Header />
        <div className='fixed-sidebar container center hide-on-med-and-down'>
          <SideMenu />
        </div>
        <div className='show-on-med-and-down container center'>
          <MobileSidebar />
        </div>
        <div className='content container center'>
          <h5>Create a trip request</h5>
          <OnewayTripForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
