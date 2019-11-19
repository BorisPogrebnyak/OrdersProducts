"use strict";

import React, { Component } from "react";
import { connect }          from "react-redux";

import NavigationMenu       from "./NavigationMenu";

class NavigationMenuContainer extends Component {
  render() {
    return <NavigationMenu />;
  }
}

export default connect()(NavigationMenuContainer);