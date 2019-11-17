"use strict";

import { CHANGE_ORDERS } from "./nameActions";

export const changeOrder = orders => ({
  type: CHANGE_ORDERS,
  orders
});
