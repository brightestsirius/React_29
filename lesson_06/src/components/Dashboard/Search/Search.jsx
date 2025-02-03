import React, { useContext } from "react";

import ListContext from "../../../contexts/ListContext";
import { SEARCH_SET } from "./../../../store/search/actions";
import { actionCreator } from "../../../store/store";

export default function Search() {
  const { search, dispatchSearch } = useContext(ListContext);

  const handleSearch = (e) =>
    dispatchSearch(actionCreator(SEARCH_SET, e.target.value));

  return <input type="text" defaultValue={search} onChange={handleSearch} />;
}
