import React, { useContext } from "react";

import DashboardContext from "../../../contexts/DashboardConext";

export default function ListItem({ item }) {
  const { color } = useContext(DashboardContext);
  return <li style={{ color }}>{item.title}</li>;
}
