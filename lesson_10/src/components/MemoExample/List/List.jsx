import React from "react";

import ListItem from "./ListItem";

export default function List({ list, listItemCompleted, color }) {
  console.log(`📕 in List`);

  return list.length ? (
    <ul style={{ width: `fit-content`, padding: `10px 20px 10px 30px`, border: `2px solid ${color}` }}>
      {list.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          listItemCompleted={listItemCompleted}
        />
      ))}
    </ul>
  ) : null;
}
