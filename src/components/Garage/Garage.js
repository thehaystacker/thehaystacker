import React, { Component } from "react";
import './Garage.scss';

class Garage extends Component {
  render() {
    return (
      <div className="thr-garage">
        <div className="thr-container">
          <h1>h1: Lorem Ipsum</h1>
          <h2>h2: Lorem Ipsum</h2>
          <h3>h3: Lorem Ipsum</h3>
          <h4>h4: Lorem Ipsum</h4>
          <h5>h5: Lorem Ipsum</h5>
          <h6>h6: Lorem Ipsum</h6>
          <p>p: Lorem Ipsum</p>

          <p className="txt-red">Text Red: Lorem Ipsum</p>
          <p className="txt-green">Text Green: Lorem Ipsum</p>
          <p className="txt-orange">Text orange: Lorem Ipsum</p>
          <p className="txt-blue">Text blue: Lorem Ipsum</p>
        </div>
      </div>
    );
  }
}

export default Garage;
