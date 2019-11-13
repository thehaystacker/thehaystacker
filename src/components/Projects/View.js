import React, { Component } from "react";

class View extends Component {
  render() {
    console.log(" [props] ", this.props);

    return (
      <div
        className="thr-projects"
        style={{ display: this.props.isExact ? "none" : "block" }}
      >
        <h4>View</h4>
      </div>
    );
  }
}

export default View;
