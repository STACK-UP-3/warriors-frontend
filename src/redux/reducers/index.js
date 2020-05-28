import { combineReducers } from 'redux';
import { storeReducer } from './reducer.example';
import { signupReducer } from './signupReducer';

export default combineReducers({
  counter: storeReducer, // Can have multiple values
  signup: signupReducer,
});

// For more information visit: https://redux.js.org/api/combinereducers
