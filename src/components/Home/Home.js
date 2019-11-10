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
        <div className="thr-container">
        <Header />

        </div>
      </div>
    );
  }
}

export default Home;
