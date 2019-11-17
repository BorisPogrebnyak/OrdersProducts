"use strict";

import { CHANGE_ORDER } from "./nameActions";

const initialOrder = {
  currentDate: new Date()
};

export const orderReducer = (state = initialOrder, action) => {
  switch (action.type) {
    case CHANGE_ORDER:
      return { ...state, order: action.order };
  }

  return state;
};
