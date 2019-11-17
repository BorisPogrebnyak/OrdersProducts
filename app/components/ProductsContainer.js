"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import Products from "./Products";

class ProductsContainer extends Component {

  render() {
    return <Products />;
  }
}

export default connect(null, null)(ProductsContainer);