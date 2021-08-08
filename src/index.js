import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import "./index.scss";
import App from "./App";
import store from './components/redux/store/index'

ReactDOM.render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
  document.getElementById("root")
);
