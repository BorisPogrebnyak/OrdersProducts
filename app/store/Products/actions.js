"use strict";

import { CHANGE_PRODUCTS } from "./nameActions";

export const changeProduct = products => ({
  type: CHANGE_PRODUCTS,
  products
});
