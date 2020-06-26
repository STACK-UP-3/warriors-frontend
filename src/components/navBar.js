import React from 'react';
import logo from '../assets/logo.png'
export default class NavBar extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar">
          <div className="nav-wrapper">
          <a
            href='#'
            data-target='slide-out'
            className='sidenav-trigger show-on-med-and-down left'>
            <i className='material-icons'>menu</i>
          </a>
          
            <a href="#" className="brand-logo">
              <img className="responsive-img" src={logo} />
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="/dashboard">
                  <i className="material-icons">home</i>
                </a>
              </li>
              <li>
                <a href="/notifications">
                  <i className="material-icons">notifications</i>
                </a>
              </li>
              <li>
                <a href="/account">
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