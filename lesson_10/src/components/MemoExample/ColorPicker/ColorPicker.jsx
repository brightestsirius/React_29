import React, { useContext } from "react";

import MemoContext from "./../../../contexts/MemoContext";

export default function ColorPicker() {
  console.log(`🎨 in ColorPicker`);
  const { color, setColor } = useContext(MemoContext);

  const handleColor = (e) => setColor(e.target.value);

  return <input type="color" defaultValue={color} onChange={handleColor} />;
}
