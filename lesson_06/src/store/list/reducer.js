import { LIST_SET } from "./actions";

const initialState = {
  list: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LIST_SET:
      return { ...state, list: payload };
    default:
      return state;
  }
};

export { reducer, initialState };
