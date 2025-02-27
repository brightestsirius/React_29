import React from "react";
import useStore from "../../store/store";

export default function BearInfo() {
  const { bears, removeAllBears } = useStore();
  return (
    <div>
      BearInfo: {bears} <button onClick={removeAllBears}>Remove</button>
    </div>
  );
}
