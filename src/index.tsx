import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
import reducer from "./store/reducer";
import { ArticleAction, ArticleState, DispatchType } from "./type";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = configureStore({ reducer, enhancers: [applyMiddleware(thunk)] });

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
