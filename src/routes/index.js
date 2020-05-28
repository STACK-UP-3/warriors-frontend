import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Public pages
import Home from '../components/home';
import ResetPassword from '../components/resetPassword';
import Login from '../components/login';
import Signup from '../components/signup';
import OnewayTrip from '../components/trips/createOnewayTrip';
// Dashboard pages
import WelcomePage from '../components/WelcomePage';
import RolesPage from '../components/roles/RolesPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          {/* Public routes */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset" component={ResetPassword} />

          {/* Dashboard routes (after successful login) */}
          <Route path="/trips/oneway" component={OnewayTrip} />
          <Route exact path="/dashboard" component={WelcomePage} />
          <Route exact path="/dashboard/roles" component={RolesPage} />

          {/* Catch missing routes... Return a 404 error page/message */}
          {/* <Route path="/" render={() => <div>404 Error: Page not found</div>} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
