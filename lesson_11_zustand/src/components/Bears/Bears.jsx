import React from "react";
import useStoreBears from "../../store/storeBears";

export default function Bears() {
  console.log(`in Bears`);
  const bearsStore = useStoreBears();

  return (
    <>
      <p>Bears: {bearsStore.bears}</p>
      <button onClick={bearsStore.increasePopulation}>Increment bears</button>
      <br></br><br></br>
      <input
        type="text"
        onBlur={(e) => bearsStore.updateBears(+e.target.value)}
      />
    </>
  );
}
