import React from "react";
import {createBrowserHistory} from 'history';
import { Router, Switch, Route } from "react-router-dom";
import asyncComponent from "./components/HOC/asyncComponent";
import "./scss/app.scss";

import Home from './components/Home/Home';
const Projects = asyncComponent(() => import('./components/Projects/Projects'));
const Resume = asyncComponent(() => import('./components/Resume/Resume'));
const Blog = asyncComponent(() => import('./components/Blog/Blog'));
const Garage = asyncComponent(() => import('./components/Garage/Garage'));
const Page404 = asyncComponent(() => import('./components/Page404/Page404'));

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/blog" component={Blog} />
        <Route path="/garage" component={Garage} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
