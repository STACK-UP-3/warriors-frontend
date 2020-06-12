import React from "react";
import { MemoryRouter } from "react-router-dom";
import { shallow } from "enzyme";
import App from "../App";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";
const store = configureStore();

describe("app component", () => {
  test("it should render the Home component", () => {
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
