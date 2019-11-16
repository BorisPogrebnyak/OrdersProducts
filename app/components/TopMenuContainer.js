"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import TopMenu from "./TopMenu";
import { changeCurrentDate } from "../store/topMenu/actions";

class TopMenuContainer extends Component {

  constructor() {
    super();
    this.timerId = null;
    this.defaultInterval = 1000;
  }

  startTimer() {
    clearInterval(this.timerID);

    this.timerID = setInterval(() => {
      this.props.dispatch(changeCurrentDate(new Date()));
    }, this.defaultInterval);
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <TopMenu currentDate={this.props.currentDate} />;
  }
}

const mapStateToProps = state => ({
  currentDate: state.currentDate.currentDate
});

export default connect(mapStateToProps)(TopMenuContainer);