import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

const stores = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={stores}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

serviceWorker.unregister();
