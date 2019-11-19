"use strict";

import React, { Component } from "react";

export default class Products extends Component {
  render() {
    return (
      <p>
        {this.props.products[0].title}
      </p>
    );
  }
}
