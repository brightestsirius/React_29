import React, { useContext } from "react";

import DashboardContext from "./../../../contexts/DashboardConext";

export default function ListColorPicker() {
  const { color, setColor } = useContext(DashboardContext);

  const handleColor = (e) => setColor(e.target.value);

  return <input type="color" defaultValue={color} onChange={handleColor} />;
}
