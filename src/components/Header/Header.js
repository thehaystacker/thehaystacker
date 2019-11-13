import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

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
              <NavLink to="/" exact className="home">Home</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
