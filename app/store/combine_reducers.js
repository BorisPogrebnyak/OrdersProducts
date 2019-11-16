"use strict";

import { combineReducers } from "redux";

import { currentDateReducer } from "./topMenu/reducers";

export default combineReducers({
  currentDate: currentDateReducer
});
