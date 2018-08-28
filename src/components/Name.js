import React, { Component, Fragment } from "react";
import { injectState } from "freactal";

const Cell = props => (
  <div {...props} className={`mdl-cell mdl-cell--${props.width}-col`} />
);

class Name extends Component {
  render() {
    const { effects, state } = this.props;

    return (
      <Fragment>
        <h3>{state.fullName}</h3>
        <form className="mdl-grid">
          <Cell width={4}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="text"
                id="firstName"
                onChange={e => {
                  effects.setFirstName(e.target.value);
                }}
                value={state.firstName}
              />
              <label className="mdl-textfield__label" htmlFor="firstName">
                First Name
              </label>
            </div>
          </Cell>
          <Cell width={4}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input
                className="mdl-textfield__input"
                type="text"
                id="lastName"
                onChange={e => {
                  effects.setLastName(e.target.value);
                }}
                value={state.lastName}
              />
              <label className="mdl-textfield__label" htmlFor="lastName">
                Last Name
              </label>
            </div>
          </Cell>
        </form>
      </Fragment>
    );
  }
}

export default injectState(Name);
