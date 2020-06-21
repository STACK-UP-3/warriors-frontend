import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  signup: signupReducer,
  loginData: loginReducer,
  profile: profileReducer,
});
