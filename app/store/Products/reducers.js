"use strict";

import { CHANGE_PRODUCT } from "./nameActions";

const initialProduct = {
  currentDate: new Date()
};

export const productReducer = (state = initialProduct, action) => {
  switch (action.type) {
    case CHANGE_PRODUCT:
      return { ...state, product: action.product };
  }

  return state;
};
