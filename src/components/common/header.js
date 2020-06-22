import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  return (
    <header className='navbar-fixed'>
      <nav className='dashboard-header'>
        <div className='nav-wrapper'>
          <a
            href='#'
            data-target='slide-out'
            className='sidenav-trigger show-on-med-and-down left'>
            <i className='material-icons'>menu</i>
          </a>
          <a href='/' className='brand-logo white-text'>
            <img
              className='responsive-img circle center'
              src='../../assets/logo.png'
            />
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/dashboard'>
                <i className='material-icons'>home</i>
              </Link>
            </li>
            <li>
              <Link to='/notifications'>
                <i className='material-icons'>notifications</i>
              </Link>
            </li>
            <li>
              <Link to='/account'>
                <i className='material-icons'>account_circle</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
