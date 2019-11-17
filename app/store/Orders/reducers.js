"use strict";

import { CHANGE_ORDERS } from "./nameActions";

const initialOrders = {
  orders: [
    {
      id: 1,
      title: 'Order 1',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products() { return products }
    },
    {
      id: 2,
      title: 'Order 2',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products() { return products }
    },
    {
      id: 3,
      title: 'Order 3',
      date: '2017-06-29 12:09:33',
      description: 'desc',
      get products() { return products },
    }
  ]
};

export const ordersReducer = (state = initialOrders, action) => {
  switch (action.type) {
    case CHANGE_ORDERS:
      return { ...state, orders: action.orders };
  }

  return state;
};
