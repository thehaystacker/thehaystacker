import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class List extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => {
    this.setState({
      ...this.state,
      counter: this.state.counter + 1
    });
  };

  render() {
    console.log(" [props] ", this.props);

    return (
      <div
        className="thr-projects"
        style={{ display: this.props.isExact ? "block" : "none" }}
      >
        <h4>List</h4>

        <h2>Counter : {this.state.counter}</h2>
        <button type="button" onClick={this.incrementCounter}>Increment</button>

        <ul>
          <li>
            <NavLink to="/projects/view/1">Item 1</NavLink>
          </li>
          <li>
            <NavLink to="/projects/view/2">Item 2</NavLink>
          </li>
          <li>
            <NavLink to="/projects/view/3">Item 3</NavLink>
          </li>
          <li>
            <NavLink to="/projects/view/4">Item 4</NavLink>
          </li>
        </ul>
        
      </div>
    );
  }
}

export default List;
