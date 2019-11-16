"use strict";

import { CHANGE_CURRENT_DATE } from "../app.jsx";

export const changeCurrentDate = newDate => {
  return {
    type: CHANGE_CURRENT_DATE,
    payload: newDate
  };
};
