import React, { useContext, useEffect } from "react";

import ListContext from "../../../contexts/ListContext";

import ListItem from "./ListItem";

export default function List() {
  const { searchList, getList } = useContext(ListContext);

  useEffect(() => {
    getList();
  }, []);

  return searchList.length ? (
    <ul>
      {searchList.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
