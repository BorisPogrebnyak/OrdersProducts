"use strict";

import { createStore } from "redux";

import combineReducers from "./combine_reducers";

export const configureStore = initialState =>
  createStore(combineReducers, initialState);
