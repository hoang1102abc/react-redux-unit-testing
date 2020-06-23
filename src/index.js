import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import { BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import App from "./components/App";
import async from "./middlewares/async";
import stateValidator from "./middlewares/stateValidator";

const store = createStore(reducers, {}, applyMiddleware(async, stateValidator));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/" component={App} />
    </Provider>
  </BrowserRouter>,
  document.querySelector("#root")
);
