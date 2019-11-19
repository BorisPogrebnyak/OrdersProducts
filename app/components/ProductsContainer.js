"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import Products from "./Products";

class ProductsContainer extends Component {

  render() {
    return <Products products = {this.props.products} />;
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(ProductsContainer);