"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import Orders from "./Orders";

class OrdersContainer extends Component {

  render() {
    return <Orders />;
  }
}

export default connect(null, null)(OrdersContainer);