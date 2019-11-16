"use strict";

import React, { Component } from "react";

export default class TopMenu extends Component {
  render() {
    const { currentDate } = this.props;
    return (
      <p>
        {currentDate.toLocaleDateString()} ÷ {currentDate.toLocaleTimeString()}
      </p>
    );
  }
}
