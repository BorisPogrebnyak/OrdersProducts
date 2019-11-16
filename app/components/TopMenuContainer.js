"use strict";

import React, { Component } from "react";
import { connect } from "react-redux";

import TopMenu from "./TopMenu";
import { changeCurrentDate } from "../store/URL/actions";

class TopMenuContainer extends Component {
  render() {
    return <TopMenu currentDate={this.props.currentDate} />;
  }
}

const mapStateToProps = state => ({
  currentDate: state.currentDate.currentDate
});

const mapDispatchToProps = {
  changeCurrentDate
};

export default connect(mapStateToProps, mapDispatchToProps)(TopMenuContainer);
