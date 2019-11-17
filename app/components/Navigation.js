"use strict";

import React, { Component } from "react";
import { Link, BrowserRouter } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Link to="/orders">Приходы</Link>
        <Link to="/products">Товары</Link>
      </div>
    );
  }
}
