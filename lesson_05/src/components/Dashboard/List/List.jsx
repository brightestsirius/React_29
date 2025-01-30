import React, { useContext } from "react";

import DashboardContext from "../../../contexts/DashboardConext";

import ListItem from "./ListItem";

export default function List() {
  const { list } = useContext(DashboardContext);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
