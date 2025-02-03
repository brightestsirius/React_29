import { LIST_SEARCH, LIST_SEARCH_SET, SEARCH_SET } from "./actions";

const initialState = {
  search: ``,
  searchList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_SET:
      return { ...state, search: payload };
    case LIST_SEARCH_SET:
      return { ...state, searchList: payload };
    case LIST_SEARCH:
      return {
        ...state,
        searchList: payload.list.filter((item) =>
          item.title.includes(payload.value)
        ),
      };
    default:
      state;
  }
};

export { reducer, initialState };
