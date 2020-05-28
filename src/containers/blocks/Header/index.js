import React from 'react';
import { Link } from 'react-router-dom';

// Load styles
import './styles.scss';
// Load images
import imgLogo from '../../../../public/images/logo-avatar.png';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="bg-primary-color">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <img className="responsive-img" src={imgLogo} />
              <span>Barefoot Nomad</span>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/dashboard">
                  <i className="material-icons">home</i>
                </Link>
              </li>
              <li>
                <Link to="/notifications">
                  <i className="material-icons">notifications</i>
                </Link>
              </li>
              <li>
                <a>
                  <i className="material-icons">account_circle</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
