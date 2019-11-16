"use strict";

import { CHANGE_CURRENT_DATE } from "../app.jsx";

export const currentDate = (state = new Date(), action) => {
  switch (action.type) {
    case CHANGE_CURRENT_DATE:
      return { ...state, currentDate: action.payload };
  }

  return state;
};
