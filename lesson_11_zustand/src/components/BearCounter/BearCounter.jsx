import React from "react";
import useStore from "./../../store/store";

export default function BearCounter() {
  const { bears, increasePopulation, updateBears } = useStore();

  const handleBlur = (e) => {
    updateBears(+e.target.value);
  };

  return (
    <>
      <h1>{bears} around here...</h1>
      <button onClick={increasePopulation}>one up</button>

      <input type="number" onBlur={handleBlur} />
    </>
  );
}
