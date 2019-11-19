"use strict";

import React, { Component } from "react";

export default class Orders extends Component {
  render() {
console.log('this.props.orders:', this.props.orders);
    return (
      <p>
        {this.props.orders[0].title}
      </p>
    );
  }
}
