import React from "react";
import { provideState, injectState } from "freactal";

const Child = injectState(({ state, effects }) => (
  <div>
    {`Our counter is at: ${state.counter}`}
    <button onClick={effects.addOne}>Add one</button>
  </div>
));

const wrapComponentWithState = provideState({
  initialState: () => ({ counter: 0 }),
  effects: {
    addOne: () => state =>
      Object.assign({}, state, { counter: state.counter + 1 })
  }
});

const Parent = wrapComponentWithState(({ state }) => <Child />);

export default Parent;
