import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import App from './App';
import "./styles.css";

import Selector from "./screens/Selector";
import Single from "./screens/Single";

const content = (
  <Router>
    <App />
  </Router>
);
ReactDOM.render(content, document.getElementById("root"));
