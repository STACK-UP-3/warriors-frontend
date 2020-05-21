// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import loginReducer from './loginReducer';
import { resetReducer } from '../reducers/resetReducer';

export default combineReducers({
  signup: signupReducer,
  loginData: loginReducer,
  resetPassword: resetReducer, 
});
