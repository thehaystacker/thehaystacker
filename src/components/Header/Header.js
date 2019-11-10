import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";
import Home from '../Home/Home';

class Header extends Component {
  render() {
    return (
      <div className="thr-header">
        <h2 className="title">
          <span className="ico">
            ><span className="blink">_</span>
          </span>
          {"<the_haystacker />"}
        </h2>
        <h5 className="subtext">{"// Frontend Engineer And Web Enthusiast"}</h5>

        <div className="header-nav">
          <ul>
            <li>
              <NavLink to="/" component={Home} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
