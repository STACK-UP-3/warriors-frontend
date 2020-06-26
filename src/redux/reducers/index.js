// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import loginReducer from './loginReducer';
import tripRequestReducer from './tripRequests';
import singleTrip from './singleTrip';
import accommodation from './accomodation';
import { citiesReducer } from './citiesReducer';
import { onewayTripReducer } from './onewayTripReducer';

export default combineReducers({
    loginData: loginReducer,
    signup: signupReducer,
    tripRequests: tripRequestReducer,
    tripRequest:singleTrip,
    accommodation:accommodation,
    cities: citiesReducer,
    onewayTrip: onewayTripReducer,
});
