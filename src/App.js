import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routes/index';
import configureStore from './redux/configureStore';

// Initialise the Redux store - where all application state is kept
const store = configureStore();

// Providing access to the store to every route,
// Resource:
// - https://react-redux.js.org/introduction/quick-start
// - https://redux.js.org/advanced/usage-with-react-router

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
