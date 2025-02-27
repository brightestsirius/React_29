import React from "react";

import useStoreBears from "../../store/storeBears";

export default function Statistics() {
  console.log(`in Statistics`);
  const bearsStore = useStoreBears();

  return (
    <div>
      Statistics:{" "}
      <ul>
        <li>Bears: {bearsStore.bears}</li>
      </ul>
    </div>
  );
}
