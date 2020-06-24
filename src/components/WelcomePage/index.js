import React from 'react';
import { Link } from 'react-router-dom';

import Dashboard from '../../containers/layouts/Dashboard';

export default class Welcome extends React.Component {
  render() {
    return (
      <Dashboard>
        <h4 className="page-title" data-test="page-title">
          Welcome to Your Dashboard
        </h4>
        <p></p>
        <Link to="/dashboard/roles" className="link-roles">
          View User Roles
        </Link>
      </Dashboard>
    );
  }
}
