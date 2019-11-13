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

        <ul>
          <li>
            <NavLink to={`${pathname}/view/1`}>Item 1</NavLink>
          </li>
          <li>
            <NavLink to={`${pathname}/view/2`}>Item 2</NavLink>
          </li>
          <li>
            <NavLink to={`${pathname}/view/3`}>Item 3</NavLink>
          </li>
          <li>
            <NavLink to={`${pathname}/view/4`}>Item 4</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default withRouter(List);
