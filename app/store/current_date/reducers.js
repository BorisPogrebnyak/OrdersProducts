"use strict";

import { CHANGE_CURRENT_DATE } from "./actions";

const initialCurrentDate = {
  currentDate: new Date()
};

export const currentDateReducer = (state = initialCurrentDate, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_DATE:
      return { ...state, currentDate: action.currentDate };
  }

  return state;
};
