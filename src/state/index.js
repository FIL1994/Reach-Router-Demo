import { provideState } from "freactal";

const wrapComponentWithState = provideState({
  initialState: () => ({ counter: 0 }),
  effects: {
    addOne: () => state =>
      Object.assign({}, state, { counter: state.counter + 1 })
  }
});

export default wrapComponentWithState;
