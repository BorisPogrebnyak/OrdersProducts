"use strict";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { configureStore } from "./store/configure_store";
import TopMenuContainer from "./components/TopMenuContainer";
import NavigationMenuContainer from "./components/NavigationMenuContainer";

const store = configureStore();

// Вывод текущей даты
ReactDOM.render(
  <Provider store={store}>
    <TopMenuContainer />
  </Provider>,
  document.getElementById("topMenu")
);

// Вывод меню навигации
ReactDOM.render(
  <Provider store={store}>
    <NavigationMenuContainer />
  </Provider>,
  document.getElementById("navigationMenu")
);
