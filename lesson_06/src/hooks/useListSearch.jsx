import React, { useReducer, useEffect } from "react";

import { LIST_SEARCH, LIST_SEARCH_SET } from "../store/search/actions";
import { actionCreator } from "./../store/store";

import { reducer, initialState } from "./../store/search/reducer";

export default function useListSearch(list) {
  const [stateSearch, dispatchSearch] = useReducer(reducer, initialState);

  useEffect(() => {
    stateSearch.search.length >= 3
      ? dispatchSearch(actionCreator(LIST_SEARCH, { list, value: stateSearch.search }))
      : dispatchSearch(actionCreator(LIST_SEARCH_SET, list));
  }, [stateSearch.search]);

  useEffect(() => {
    dispatchSearch(actionCreator(LIST_SEARCH_SET, list));
  }, [list]);

  return {stateSearch, dispatchSearch};
}
