import App from "./App";
import createSagaMiddleware from "redux-saga";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./store/Reducers";
import rootSagas from "./store/Sagas";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import "./index.css";

const initialState = {};

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
