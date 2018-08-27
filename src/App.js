import React, { Component, Fragment } from "react";
import { Router, Link } from "@reach/router";

import "material-design-lite/dist/material.css";

const Home = () => <div>Home</div>;
const Dash = () => <div>Dash</div>;

class App extends Component {
  render() {
    return (
      <Fragment>
        <nav>
          <Link to="/">Home</Link>
          <Link to="dashboard">Dashboard</Link>
        </nav>
        <Router>
          <Home path="/" />
          <Dash path="dashboard" />
        </Router>
      </Fragment>
    );
  }
}

export default App;
