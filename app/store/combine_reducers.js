"use strict";

import { combineReducers }    from "redux";

import { currentDateReducer } from "./topMenu/reducers";
import { ordersReducer }      from './Orders/reducers';
import { productReducer }     from './Products/reducers';

export default combineReducers({
  currentDate: currentDateReducer,
  orders:      ordersReducer,
  products:    productReducer,
});
