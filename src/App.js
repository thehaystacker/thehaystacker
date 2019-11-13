import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./scss/app.scss";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";
import Garage from "./components/Garage/Garage";
import Page404 from "./components/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
        <Route path="/garage" component={Garage} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
