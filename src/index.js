import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main";
import createStore from "./store.js";
import { Provider } from "react-redux";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);
