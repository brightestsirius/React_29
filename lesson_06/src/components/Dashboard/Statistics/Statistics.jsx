import React, { useContext } from "react";

import ListContext from "../../../contexts/ListContext";

export default function Statistics() {
  const { list } = useContext(ListContext);

  return (
    <ul>
      <li>All: {list.length}</li>
      <li>Completed: {list.filter((item) => item.completed).length}</li>
      <li>Progress: {list.filter((item) => !item.completed).length}</li>
    </ul>
  );
}
