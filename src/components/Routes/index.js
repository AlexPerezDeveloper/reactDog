import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Selector from "../../screens/Selector";
import Single from "../../screens/Single";
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Selector} />
      <Route exact path="/:slug" component={Single} />
    </Switch>
  </Router>
);
ReactDOM.render(Routes, document.getElementById("root"));


export default Routes