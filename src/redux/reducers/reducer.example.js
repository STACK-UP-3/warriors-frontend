// Sample reducer example
// For more information visit: https://redux.js.org/basics/reducers

import { ACTION_1, ACTION_TYPE } from '../actions/actionTypes';


export const storeReducer = (state = { count: 0 }, action)=>{
  switch (action.type) {
      case ACTION_TYPE:    // VISUALIZATION OF HOW ACTION TYPE LOOKS
          return ;

      case ACTION_1:  // Sample action type
          return {
              count: state.count + action.incrementValue,
          };
  
      default:
          return state;
  }
};
