import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/user.svg';

export default () => {
  
  return (
    <div className='sideMenuContainer'>
      <div className='profile'>
        <img src={user} /> {/*using image imported */}
        <a className='btn-floating btn-small halfway-fab waves-effect waves-light blue lighten-5'>
          <i className='large material-icons indigo-text darken-4'>mode_edit</i>
        </a>
      </div>
      <div className='menu'>
        <Link 
          to='/dashboard' 
          className={window.location.pathname.includes('dashboard') ?'activeMenuItem black-text sidenav-close': 'menuItem black-text sidenav-close'} 
        >
          <h6>Dashboard</h6>
          <i className='material-icons'>pie_chart</i>
          
        </Link>
        <Link 
            to='/trips/oneway' 
            className={window.location.pathname.includes('/trips/oneway') ?'activeMenuItem black-text sidenav-close': 'menuItem black-text sidenav-close'} 
        >
          <h6>Make trip request</h6>
          <i className='material-icons'>airplanemode_active</i>
          
        </Link>
        <Link 
          to='/viewtrips/accepted' 
          className={window.location.pathname.includes('/viewtrips/')?'activeMenuItem black-text sidenav-close': 'menuItem black-text sidenav-close'} 
        >
              <h6>My Trips</h6>
              <i className="material-icons">card_travel</i> 
              
          </Link>
      </div>
    </div>
  );
};
