import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="mdl-layout__header mdl-layout__header--scroll">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.appName}</span>

            <div className="mdl-layout-spacer" />

            <nav className="mdl-navigation">
              <Link to="/" className="mdl-navigation__link">
                Home
              </Link>
              <Link to="name" className="mdl-navigation__link">
                Name
              </Link>
              <Link to="dashboard" className="mdl-navigation__link">
                Dashboard
              </Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props.appName}</span>
          <nav className="mdl-navigation">
            <Link to="/" className="mdl-navigation__link">
              Home
            </Link>
            <Link to="name" className="mdl-navigation__link">
              Name
            </Link>
            <Link to="dashboard" className="mdl-navigation__link">
              Dashboard
            </Link>
          </nav>
        </div>
      </Fragment>
    );
  }
}

Header.defaultProps = {
  appName: "Reach Router Stuff"
};

Header.propTypes = {
  appName: PropTypes.string
};

export default Header;
