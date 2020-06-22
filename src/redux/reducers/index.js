// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import loginReducer from './loginReducer';
import { citiesReducer } from './citiesReducer';
import { onewayTripReducer } from './onewayTripReducer';

export default combineReducers({
  signup: signupReducer,
  loginData: loginReducer,
  cities: citiesReducer,
  onewayTrip: onewayTripReducer,
});
