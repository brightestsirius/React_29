import React from "react";

import List from "./List/List";
import Statistics from "./Statistics/Statistics";
import Search from "./Search/Search";

import ListContext from "./../../contexts/ListContext";

import useList from "../../hooks/useList";
import useListSearch from "../../hooks/useListSearch";

export default function Dashboard() {
  const { stateList, getList, deleteItem } = useList();
  const { stateSearch, dispatchSearch } = useListSearch(stateList.list);

  return (
    <ListContext.Provider
      value={{
        ...stateList,
        getList,
        deleteItem,
        ...stateSearch,
        dispatchSearch,
      }}
    >
      <Statistics />
      <Search />
      <List />
    </ListContext.Provider>
  );
}
