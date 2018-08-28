import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "@reach/router";

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent, location }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: props.className + (isCurrent ? " is-active" : "")
      };
    }}
  />
);

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="mdl-layout__header mdl-layout__header--scroll">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.appName}</span>

            <div className="mdl-layout-spacer" />

            <nav className="mdl-navigation">
              <NavLink to="/" className="mdl-layout__tab ">
                Home
              </NavLink>
              <NavLink to="name" className="mdl-layout__tab ">
                Name
              </NavLink>
              <NavLink to="dashboard" className="mdl-layout__tab ">
                Dashboard
              </NavLink>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">{this.props.appName}</span>
          <nav className="mdl-navigation">
            <NavLink to="/" className="mdl-navigation__link">
              Home
            </NavLink>
            <NavLink to="name" className="mdl-navigation__link">
              Name
            </NavLink>
            <NavLink to="dashboard" className="mdl-navigation__link">
              Dashboard
            </NavLink>
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
