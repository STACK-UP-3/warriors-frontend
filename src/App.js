import React from "react";
import AppRoute from "./routes/index";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import "./assets/sass/main.scss";


const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
};

export default App;
