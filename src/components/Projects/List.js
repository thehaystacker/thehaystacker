import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class List extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    let updatedCounter = this.state.counter + 1;
    this.setState({
      ...this.state,
      counter: updatedCounter
    });
  };

  render() {
    console.log(" [props] ", this.props);

    let { pathname } = this.props.location;
    let { isExact } = this.props.match;

    const projectLinks = [];
    for (let i = 1; i <= 5; i++) {
      projectLinks.push(
        <li key={i}>
          <NavLink to={`${pathname}/view/${i}`}>Item {`${i}`}</NavLink>
        </li>
      );
    }

    return (
      <div
        className="thr-projects"
        style={{ display: isExact ? "block" : "none" }}
      >
        <h4>List</h4>

        <h2>Counter : {this.state.counter}</h2>
        <button type="button" onClick={this.incrementCounter}>
          Increment
        </button>

        <ul>{projectLinks}</ul>
      </div>
    );
  }
}

export default withRouter(List);
