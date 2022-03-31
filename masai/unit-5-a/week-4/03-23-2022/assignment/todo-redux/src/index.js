import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import storeConfig from "./storeConfig/store";

import App from "./App";

const store = storeConfig();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
