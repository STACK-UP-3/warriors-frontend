import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Signup from '../components/signup';
import SendResetEmail from "../components/containers/resetpassword/SendResetEmail";
import ResetPassword from "../components/containers/resetpassword/ResetPassword";

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/reset' component={ResetPassword} />
          <Route exact path="/resetpassword" component={ResetPassword} />
          <Route exact path="/sendresetemail" component={SendResetEmail} />
          </Switch>
        
    </BrowserRouter>
  );
};

export default AppRoute;
