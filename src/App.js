import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CacheRoute, {CacheSwitch} from 'react-router-cache-route';
import "./scss/app.scss";

import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Blog from "./components/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <CacheSwitch>
        <CacheRoute path="/" exact component={Home} when="always" />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
      </CacheSwitch>
    </BrowserRouter>
  );
}

export default App;
