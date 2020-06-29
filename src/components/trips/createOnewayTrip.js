import React from 'react';
import Navbar from '../../components/navBar';
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
      <Navbar />
      <main className='onewayTripContainer'>
        <div className='sideMenu'>
          <div className='fixed-sidebar container center hide-on-med-and-down'>
            <SideMenu />
          </div>
          <div className='show-on-med-and-down container center'>
            <MobileSidebar />
          </div>
        </div>
        <div className='mainContent'>
          <div className='row'>
            <div className='col s12 m2'></div>
            <div className='col s12 m10 content'>
              <h5 className='center'>Create a trip request</h5>
              <OnewayTripForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
