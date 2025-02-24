import React, { memo } from "react";

export default function ColorPicker({ color, setColor }) {
  console.log(`🎨 in ColorPicker`);

  const handleColor = (e) => setColor(e.target.value);

  return <input type="color" defaultValue={color} onChange={handleColor} />;
}
