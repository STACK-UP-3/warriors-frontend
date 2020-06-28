import React from 'react';
import Navbar from '../navBar';
import SideMenu from '../common/sideMenu';
import MobileSidebar from '../common/mobileSidebar';
import Footer from '../footer';
import CreateAccomForm from './accommodationForm';

export default () => (
  <div>
    <Navbar />
    <main className='createAccomContainer'>
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
            <h5 className='center'>Create Accommodation</h5>
            <CreateAccomForm />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
