import React, { Component } from "react";
import { Router } from "@reach/router";
import { injectState } from "freactal";

import "material-design-lite/material.min.css";
import "material-design-lite/material.min.js";

import wrapComponentWithState from "./state";
import Header from "./components/Header";
import Home from "./components/Home";
import Name from "./components/Name";

const Dash = () => <div>Dash</div>;

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <main className="mdl-layout__content" style={{ margin: "10px 80px" }}>
          <Router>
            <Home path="/" />
            <Dash path="dashboard" />
            <Name path="name" />
          </Router>
        </main>
      </div>
    );
  }
}

export default wrapComponentWithState(injectState(App));
