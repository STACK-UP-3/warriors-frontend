import { combineReducers } from 'redux';
import { storeReducer } from './reducer.example';

export default combineReducers({
    counter: storeReducer,  // Can have multiple values
});

// For more information visit: https://redux.js.org/api/combinereducers
