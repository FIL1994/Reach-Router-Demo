import React, { Component } from "react";
import { Router } from "@reach/router";
import "material-design-lite/material.min.css";
import "material-design-lite/material.min.js";

import Header from "./components/Header";

const Home = () => <div>Home</div>;
const Dash = () => <div>Dash</div>;

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Header />
        <main className="mdl-layout__content">
          <Router>
            <Home path="/" />
            <Dash path="dashboard" />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
