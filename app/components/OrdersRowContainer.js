'use strict';

import React, { Component } from 'react';
import { connect }          from 'react-redux';

import OrdersRow            from './OrdersRow';

class OrdersRowContainer extends Component {
  render() {
    return (
      <OrdersRow order = {this.props.order} />
    );
  }
}

export default connect()(OrdersRowContainer);