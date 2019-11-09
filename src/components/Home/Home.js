import React, { Component } from "react";

import Header from "../Header/Header";

class Home extends Component {
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
    return (
      <div className="thr-home">
        <Header />

        <h4>Home</h4>
        <h4>Counter : {this.state.counter}</h4>

        <button type="button" onClick={this.incrementCounter}>Add 1</button>
      </div>
    );
  }
}

export default Home;
