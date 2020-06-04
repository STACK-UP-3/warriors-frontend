import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import ResetPassword from '../components/resetPassword';
import Login from '../components/login';
import Signup from '../components/signup';


const AppRoute = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset" component={ResetPassword} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;