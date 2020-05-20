// For more information visit: https://redux.js.org/api/combinereducers

import { combineReducers } from 'redux';
import loginReducer from './loginReducer';

export default combineReducers({
    loginData: loginReducer, 
});
