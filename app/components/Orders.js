"use strict";

import React, { Component } from "react";

import OrdersTableHeader    from './OrdersTableHeader';
import OrdersRowContainer   from './OrdersRowContainer';

export default class Orders extends Component {
  render() {
    return (
      <table>
        <OrdersTableHeader />
        <tbody>
          {Array.from(this.props.orders, currentOrder => <OrdersRowContainer order = {currentOrder} />)}
        </tbody>
      </table>
    );
  }
}
