import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className='sideMenuContainer'>
      <div className='profile'>
        <img src='../../assets/logo.png' />
        <a className='btn-floating btn-small halfway-fab waves-effect waves-light blue lighten-5'>
          <i className='large material-icons indigo-text darken-4'>mode_edit</i>
        </a>
      </div>
      <div className='menu'>
        <Link to='/dashboard' className='menuItem black-text sidenav-close'>
          <h6>Dashboard</h6>
          <i className='material-icons'>pie_chart</i>
        </Link>
        <Link to='/trips/oneway' className='menuItem black-text sidenav-close'>
          <h6>Make trip request</h6>
          <i className='material-icons'>airplanemode_active</i>
        </Link>
        <Link
          to='/create-accommodation'
          className='menuItem black-text sidenav-close'>
          <h6>Create Accommodation</h6>
          <i className='material-icons'>house</i>
        </Link>
      </div>
    </div>
  );
};
