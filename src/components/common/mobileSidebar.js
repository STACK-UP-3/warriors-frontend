import React, { Component } from 'react';
import M from 'materialize-css';
import SideMenu from './sideMenu';

export default class mobileSidebar extends Component {
  componentDidMount() {
    /* istanbul ignore next */
    document.addEventListener('DOMContentLoaded', function () {
      const sidebar = document.querySelectorAll('.sidenav');
      M.Sidenav.init(sidebar, { draggable: true });
    });
  }

  render() {
    return (
      <div>
        <div id='slide-out' className='sidenav'>
          <SideMenu />
        </div>
      </div>
    );
  }
}
