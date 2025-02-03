import React, { useContext } from "react";

import Button from "./../../Button/Button";

import ListContext from "../../../contexts/ListContext";

export default function ListItem({ item }) {
  const { deleteItem } = useContext(ListContext);

  return (
    <li>
      {item.title}{" "}
      <Button title={`Delete`} handleClick={() => deleteItem(item.id)} />
    </li>
  );
}
