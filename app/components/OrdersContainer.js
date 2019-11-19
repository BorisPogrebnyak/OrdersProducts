"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import Orders from "./Orders";

class OrdersContainer extends Component {

  render() {
    return <Orders orders = {this.props.orders} />;
  }
}

const mapStateToProps = state => ({
  orders: state.orders.orders,
});

export default connect(mapStateToProps)(OrdersContainer);