import React from 'react';
import { Provider } from 'react-redux';
import AppRoute from './routes/index';
import configureStore from './redux/configureStore';

const store = configureStore();

// Providing access to the store to every route, Resource: https://react-redux.js.org/introduction/quick-start

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
