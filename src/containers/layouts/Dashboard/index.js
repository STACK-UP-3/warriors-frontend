import React from 'react';
import PropTypes from 'prop-types';

// Load styles
import './styles.scss';

// Load page components
import Header from '../../blocks/Header';
import Sidebar from '../../blocks/Sidebar';
import Footer from '../../blocks/Footer';

export default class Dashboard extends React.Component {
  constructor() {
    super();

    // // user must be logged in to access the dashboard
    // const token = localStorage.getItem('token');
    // if (!token) window.location.replace('/login');
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="row">
            <div className="col s12 m3">
              <Sidebar />
            </div>
            <div className="col s12 m9">{this.props.children}</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

/**
 * Define prop types for the Component
 */
Dashboard.propTypes = {
  children: PropTypes.node.isRequired,
};
