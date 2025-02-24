import React, { useContext } from "react";

import MemoContext from "../../../contexts/MemoContext";

export default function ListItem({ item }) {
  console.log(`📋 in ListItem`);
  const { color, listItemCompleted } = useContext(MemoContext);
  return (
    <li
      style={{ color: item.completed && color }}
      onClick={() => listItemCompleted(item)}
    >
      {item.title}
    </li>
  );
}
