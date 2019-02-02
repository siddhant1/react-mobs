import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "mobx-react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./store/ItemsStore";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();
