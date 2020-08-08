import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { App } from "./components/App";
import configureStore from "./store";
import { defaultState } from "../server/defaultState";

const store = configureStore(defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);