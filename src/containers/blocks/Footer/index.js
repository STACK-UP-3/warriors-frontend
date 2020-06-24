import React from 'react';
import { Link } from 'react-router-dom';

// Load styles
import './styles.scss';
// Load images
import icoFacebook from '../../../../public/images/icon-facebook.svg';
import icoInstagram from '../../../../public/images/icon-instagram.svg';
import icoSnapchat from '../../../../public/images/icon-snapchat.svg';
import icoGooglePlus from '../../../../public/images/icon-google-plus.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer indigo darken-4">
        <div className="footer-copyright">
          <div className="row">
            <div className="col s12 m4 left-align">
              <p className="subtitle">Find Us Online</p>
              <div className="social-icons">
                <a href="#">
                  <img src={icoFacebook} />
                </a>
                <a href="#">
                  <img src={icoInstagram} />
                </a>
                <a href="#">
                  <img src={icoSnapchat} />
                </a>
                <a href="#">
                  <img src={icoGooglePlus} />
                </a>
              </div>
            </div>
            <div className="col s12 m4 valign-wrapper">
              <span id="copyright">
                Copyright © 2020 Warriorz Team @ Andela Kigali Stack-Up 3
              </span>
            </div>
            <div className="col s12 m4 right-align">
              <p className="subtitle">Get Customer Support</p>
              <div className="row">
                <div className="col s12 m6"></div>
                <div className="col s12 m6">
                  <Link to="#" className="col s6 m4">
                    <i className="material-icons">call</i>
                  </Link>
                  <Link to="#" className="col s6 m4">
                    <i className="material-icons">sms</i>
                  </Link>
                  <Link to="#" className="col s6 m4">
                    <i className="material-icons">mail</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
