import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import Login from '../components/login';
import Signup from '../components/signup';
import SendResetEmail from "../components/SendResetEmail";
import resetpassword from "../components/resetpassword";

const AppRoute = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/reset' component={SendResetEmail} />
          <Route exact path="/resetpassword" component={resetpassword} />
          </Switch>

    </BrowserRouter>
  );
};

export default AppRoute;