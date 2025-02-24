import React, { useContext } from "react";

import MemoContext from "../../../contexts/MemoContext";
import ListItem from "./ListItem";

export default function List() {
  console.log(`📕 in List`);

  const { list } = useContext(MemoContext);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
