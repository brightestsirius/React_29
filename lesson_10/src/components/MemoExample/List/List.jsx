import React from "react";

import ListItem from "./ListItem";

export default function List({ list, listItemCompleted, color }) {
  console.log(`📕 in List`);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          listItemCompleted={listItemCompleted}
          color={color}
        />
      ))}
    </ul>
  ) : null;
}
