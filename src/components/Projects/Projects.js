import React, { Component } from "react";

import Header from "../Header/Header";
import List from "./List";
import View from "./View";

class Projects extends Component {
  render() {
    return (
      <div className="thr-projects">
        <div className="thr-container">
          <Header />

          <List />
          <View />
        </div>
      </div>
    );
  }
}

export default Projects;
