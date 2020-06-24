import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from './reducers/index';

export default () => {
  const store = createStore(
    RootReducer,
    {}, // initial state (should be empty...will be over-written by reducers)
    composeWithDevTools(applyMiddleware(thunk, promise)),
  );

  return store;
};

//  For more information visit: https://redux.js.org/basics/store
