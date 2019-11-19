'use strict';

import React, { Component } from 'react';

export default class OrdersRow extends Component {
  render() {
    const { order } = this.props;
    let row = []; // Cтрока таблицы - параметры одного прихода

    // Фрмирование параметров одного прихода с уникальными ключами
    row.push(<td key={order.title}>{order.title}</td>);
    row.push(<td key={order.description}>{order.description}</td>);
    row.push(<td key={order.date}>{order.date}</td>);

    // Возврат строки таблицы - один приход
    return (
      <tr>{row}</tr>
    );
  }
}