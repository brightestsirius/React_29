import React from "react";

import useStoreBears from "../../store/storeBears";

export default function Features() {
  console.log(`in Features`);
  const bearsName = useStoreBears((state) => state.name);

  return (
    <div>
      Features:{" "}
      <ul>
        <li>{bearsName}</li>
      </ul>
    </div>
  );
}
