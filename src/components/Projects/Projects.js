import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../Header/Header";
import List from "./List";
import View from "./View";

class Projects extends Component {
  render() {
    var { isExact } = this.props.match;

    return (
      <div className="thr-projects">
        <div className="thr-container">
          <Header />

          <List isExact={isExact} />
          <View isExact={isExact} />
        </div>
      </div>
    );
  }
}

export default Projects;
