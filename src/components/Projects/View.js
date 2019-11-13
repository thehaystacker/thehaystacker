import React, { Component } from "react";
import {  withRouter } from "react-router-dom";

class View extends Component {
  render() {
    console.log(" [props] ", this.props);

    let {isExact} = this.props.match;

    return (
      <div
        className="thr-projects"
        style={{ display: isExact ? "none" : "block" }}
      >
        <h4>View</h4>
      </div>
    );
  }
}

export default withRouter(View);
