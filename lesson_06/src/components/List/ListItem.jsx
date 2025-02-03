import React from "react";

import ListButton from "./ListButton";

export default function ListItem({ item, deleteItem }) {
  return (
    <li>
      {item.title}{" "}
      <ListButton title={`Delete`} handleClick={() => deleteItem(item.id)} />
    </li>
  );
}
