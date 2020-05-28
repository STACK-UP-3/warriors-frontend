import { combineReducers } from 'redux';

import { signupReducer } from './signupReducer';
import loginReducer from './loginReducer';
import { citiesReducer } from './citiesReducer';
import { onewayTripReducer } from './onewayTripReducer';
import { roleReducer } from './roleReducer';

export default combineReducers({
  signup: signupReducer,
  loginData: loginReducer,
  cities: citiesReducer,
  onewayTrip: onewayTripReducer,
  roleReducer,
});

// For more information visit: https://redux.js.org/api/combinereducers
