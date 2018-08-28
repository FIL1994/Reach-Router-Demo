import React, { Fragment } from "react";
import { injectState } from "freactal";

const Child = injectState(({ state, effects }) => (
  <Fragment>
    Our counter is at: {state.counter}
    <br />
    <button
      onClick={effects.addOne}
      className="mdl-button mdl-js-button mdl-button--raised"
    >
      Add One
    </button>
  </Fragment>
));

export default Child;
