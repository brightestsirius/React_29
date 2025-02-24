import React from "react";

export default function ListItem({ item, listItemCompleted, color }) {
  console.log(`📋 in ListItem`);

  return (
    <li
      style={{ color: item.completed && color }}
      onClick={() => listItemCompleted(item)}
    >
      {item.title}
    </li>
  );
}
