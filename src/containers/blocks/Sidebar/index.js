import React from 'react';
import { Link } from 'react-router-dom';

// Load styles
import './styles.scss';
// Load images
import imgUserAvatar from '../../../../public/images/coronavirus.png';

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="user-view center-align">
          <img className="circle" src={imgUserAvatar} />
          <p>
            <button className="btn">Edit Profile</button>
          </p>
        </div>
        <ul className="sidebar-menu">
          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="material-icons">pie_chart</i> Dashboard
            </Link>
          </li>
          <li>
            <Link to="#" className="waves-effect">
              <i className="material-icons">airplanemode_active</i> Make Trip
              Request
            </Link>
          </li>
          <li>
            <Link to="#" className="waves-effect">
              <i className="material-icons">search</i> Explore
            </Link>
          </li>
          <li>
            <Link to="#" className="waves-effect">
              <i className="material-icons">card_travel</i> My Trips
            </Link>
          </li>
          <li>
            <Link to="#" className="waves-effect">
              <i className="material-icons">chat_bubble_outline</i> Chat
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
