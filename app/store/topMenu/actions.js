"use strict";

import { CHANGE_CURRENT_DATE } from "./nameActions";

export const changeCurrentDate = currentDate => ({
  type: CHANGE_CURRENT_DATE,
  currentDate
});
