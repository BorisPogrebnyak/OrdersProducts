"use strict";

import React, { Component }                       from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation        from './Navigation';
import OrdersContainer   from './OrdersContainer';
import ProductsContainer from './ProductsContainer';

export default class NavigationMenu extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route path = "/orders"   component = {OrdersContainer} />
            <Route path = "/products" component = {ProductsContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
