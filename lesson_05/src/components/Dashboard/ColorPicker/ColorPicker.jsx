import React, { useContext } from "react";

import ListColorContext from "../../../contexts/ListColorContext";

export default function ColorPicker() {
  const {color, setColor} = useContext(ListColorContext);

  const handleColor = (e) => setColor(e.target.value);

  return <input type="color" defaultValue={color} onChange={handleColor} />;
}
