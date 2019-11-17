"use strict";

import { CHANGE_PRODUCT } from "./nameActions";

export const changeProduct = product => ({
  type: CHANGE_PRODUCT,
  product
});
