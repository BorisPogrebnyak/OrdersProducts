"use strict";

import { CHANGE_ORDER } from "./nameActions";

export const changeOrder = order => ({
  type: CHANGE_ORDER,
  order
});
