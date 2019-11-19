'use strict';

import React, { Component } from 'react';

export default class OrdersTableHeader extends Component {
  render() {
    return (
      <thead>
        <tr><td>Название</td><td>Описания</td><td>Дата</td></tr>
      </thead>
    );
  }
}