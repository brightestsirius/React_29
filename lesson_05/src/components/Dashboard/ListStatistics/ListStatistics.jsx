import React, { useContext } from "react";

import DashboardContext from "../../../contexts/DashboardConext";

export default function ListStatistics() {
  const { list } = useContext(DashboardContext);
  return (
    <ul>
      <li>All: {list.length}</li>
      <li>Completed: {list.filter((item) => item.completed).length}</li>
      <li>In progress: {list.filter((item) => !item.completed).length}</li>
    </ul>
  );
}
