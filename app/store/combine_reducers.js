"use strict";

import { combineReducers } from "redux";

import { currentDateReducer } from "./current_date/reducers";

export default combineReducers({
  currentDate: currentDateReducer
});
