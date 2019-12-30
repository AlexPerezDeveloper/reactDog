import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import Selector from "./screens/Selector";
import Single from "./screens/Single";

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Selector} />
      <Route exact path="/:slug" component={Single} />
    </Switch>
  </Router>
);
ReactDOM.render(routes, document.getElementById("root"));
