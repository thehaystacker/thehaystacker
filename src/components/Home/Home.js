import React, { Component } from "react";

import "./Home.scss";
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

          <div className="readme thr-sec">
            <h5 className="sec-title">README.md</h5>

            <pre>
              <p className="para">
                {"   "}
                -- I'm Sangeeth, a Front-end engineer and software consultant
                based in Bangalore,IN. I specialise in web app development. I’ve
                been active in the engineering world for over 4 years. My
                passion sits between my love for amazing technology and my drive
                to help others around the world grow and learn from each other.
              </p>
              <p className="para">
                {"   "}I now work with an amazing team during the day, and in
                the wee hours of the night I burn my brain with one of my many
                side projects. I'm always looking for a coding buddy, so if
                you're interested, get in touch!{" "}
                <pre>
                  <span role="img" aria-label="email">
                    📨
                  </span>
                  <a href="mailto:thehaystacker.in@gmail.com">
                    thehaystacker.in@gmail.com
                  </a>
                </pre>
              </p>
              <p className="para">
                I’m generally full of questions and thirsty for{" "}
                <b>
                  <span role="img" aria-label="email">
                    ☕
                  </span>
                  coffee
                </b>
                .
              </p>
            </pre>
          </div>

          <div className="thr-sec sec-commits">
            <h5 className="sec-title">COMMITS</h5>

            <div className="ims-commit-table">
              <table>
                <tr>
                  <td className="td-dot">
                    <span className="dot green"></span>
                  </td>
                  <td>
                    <p>
                      Front-End Engineer
                      <span className="ims-cmt-yr">{"// Current"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      <span className="txt-red">Mobiotics, Bangalore, IN</span>
                    </p>
                  </td>
                </tr>

                <tr className="spacer"></tr>

                <tr>
                  <td className="td-dot">
                    <span className="dot blue"></span>
                  </td>
                  <td>
                    <p>
                      Freelance Project
                      <span className="ims-cmt-yr">{"// Aug 2016"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      For a company named{" "}
                      <span className="txt-green">ITSCCTV</span> based in{" "}
                      <span className="txt-green">Dubai, UAE</span>
                    </p>
                  </td>
                </tr>

                <tr className="spacer"></tr>

                <tr>
                  <td className="td-dot">
                    <span className="dot orange"></span>
                  </td>
                  <td>
                    <p>
                      Jn. Software Engineer
                      <span className="ims-cmt-yr">{"// Nov 2015"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      Joined{" "}
                      <span className="txt-purple">
                        Oceao Technologies, Kochi, IN
                      </span>
                    </p>
                    <p>as Junior web developer</p>
                  </td>
                </tr>

                <tr className="spacer"></tr>

                <tr>
                  <td className="td-dot">
                    <span className="dot red"></span>
                  </td>
                  <td>
                    <p>
                      Web Developer Trainee
                      <span className="ims-cmt-yr">{"// Oct 2015"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      From{" "}
                      <span className="txt-blue">
                        Baabte System Technologies, Bangalore, IN
                      </span>
                    </p>
                    <p>becomes certified web developer</p>
                  </td>
                </tr>

                <tr className="spacer"></tr>

                <tr>
                  <td className="td-dot">
                    <span className="dot green"></span>
                  </td>
                  <td>
                    <p>
                      Graduated
                      <span className="ims-cmt-yr">{"// Mar 2015"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      <span className="txt-orange">
                        Bachelor of Computer Application
                      </span>
                      , from{" "}
                    </p>
                    <p>Bharathiyar University, TN</p>
                  </td>
                </tr>

                <tr className="spacer"></tr>

                <tr>
                  <td className="td-dot">
                    <span className="dot purple"></span>
                  </td>
                  <td>
                    <p>
                      First Freelance Project
                      <span className="ims-cmt-yr">{"// Oct 2014"}</span>
                    </p>
                  </td>
                  <td>
                    <p>
                      Website for{" "}
                      <span className="txt-green">MNH Hospital</span>
                    </p>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="thr-sec sec-checkout">
            <h5 className="sec-title">CHECKOUT</h5>

            <div className="txt-c">
              <p>Follow me on my journey and get a preview of my projects.</p>
  
              <ul className="chk-links">
                <li>
                  <a
                    href="https://github.com/thehaystacker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/thehaystacker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/insangeeth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.behance.net/sangeethks_in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    behance
                  </a>
                </li>
              </ul>
  
              <div className="strips">
                <div className="strip purple"></div>
                <div className="strip green"></div>
                <div className="strip red"></div>
                <div className="strip blue"></div>
                <div className="strip orange"></div>
              </div>
  
              <div className="footer">
                <h5>Thanks for visiting !</h5>
                <p>
                  &copy; Copyright {new Date().getFullYear()}. All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
