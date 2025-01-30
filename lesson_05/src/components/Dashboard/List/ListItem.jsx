import React, { useContext } from "react";

import ListColorContext from "../../../contexts/ListColorContext";

export default function ListItem({ item }) {
  const { color } = useContext(ListColorContext);
  return <li style={{ color }}>{item.title}</li>;
}
