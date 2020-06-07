import React from 'react';
import Navbar from './navBar';
import SideMenu from './common/sideMenu';
import MobileSidebar from './common/mobileSidebar';
import Footer from './footer';
import SideInit from './common/SideInitializer';
export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <main>
        <div className='sideMenu'>
              <div className='fixed-sidebar container center hide-on-med-and-down'>
                <SideMenu />
              </div>
              <div className='show-on-med-and-down container center'>
                <MobileSidebar />
              </div>
            </div>
            <div className='mainContent'>
                <h1>DashBoard</h1>
            </div>
        </main>
        <SideInit />
        <Footer />
      </div>
    );
  }
}
