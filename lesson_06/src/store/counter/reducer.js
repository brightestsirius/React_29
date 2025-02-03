import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_MULTIPLY,
} from "./actions";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_MULTIPLY:
      return { ...state, counter: state.counter * +payload };
    default:
      return state;
  }
};

export { reducer, initialState };
