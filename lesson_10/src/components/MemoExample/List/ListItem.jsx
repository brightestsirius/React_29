import React from "react";

import Button from "./../Button/Button";

export default function ListItem({ item, listItemCompleted }) {
  console.log(`📋 in ListItem`);

  return (
    <li
      style={{ textDecoration: item.completed && `underline` }}
      onClick={() => listItemCompleted(item)}
    >
      {item.title} <Button />
    </li>
  );
}
