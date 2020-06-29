import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/home';
import Dashboard from '../components/dashboard';
import ResetPassword from '../components/resetPassword';
import Login from '../components/login';
import Signup from '../components/signup';
import ViewTrips from '../components/tripRequests/viewTripRequests/tripRequestsLayout';
import ViewSingleTrip from '../components/tripRequests/viewTripRequests/singleTripLayout';
import EditTripRequest from '../components/editTripRequest';
import OnewayTrip from '../components/trips/createOnewayTrip';
import CreateAccommodation from '../components/accommodations/createAccommodation';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/reset' component={ResetPassword} />
          <Route path='/viewtrips' component={ViewTrips} />
          <Route path='/viewtrip/:id' component={ViewSingleTrip} />
          <Route path='/edit/:id' component={EditTripRequest} />
          <Route path='/trips/oneway' component={OnewayTrip} />
          <Route path='/create-accommodation' component={CreateAccommodation} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;
