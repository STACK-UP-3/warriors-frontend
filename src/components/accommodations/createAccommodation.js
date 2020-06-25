import React from 'react';
import Header from '../common/header';
import SideMenu from '../common/sideMenu';
import MobileSidebar from '../common/mobileSidebar';
import Footer from '../footer';
import CreateAccomForm from './accommodationForm';

export default () => {
  return (
    <div>
      <div className='createAccomContainer'>
        <Header />
        <div className='fixed-sidebar container center hide-on-med-and-down'>
          <SideMenu />
        </div>
        <div className='show-on-med-and-down container center'>
          <MobileSidebar />
        </div>
        <div className='content container center'>
          <h5 className='center'>Create accommodation</h5>
          <CreateAccomForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
