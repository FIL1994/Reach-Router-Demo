import React from "react";
import { injectState } from "freactal";

const Child = injectState(({ state, effects }) => (
  <div style={{ margin: 50 }}>
    Our counter is at: {state.counter}
    <br />
    <button
      onClick={effects.addOne}
      className="mdl-button mdl-js-button mdl-button--raised"
    >
      Add One
    </button>
  </div>
));

export default Child;
