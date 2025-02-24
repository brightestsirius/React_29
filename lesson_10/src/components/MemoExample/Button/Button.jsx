import React, { memo } from "react";

export default memo(function Button() {
  console.log(`🟣 in Button`);
  return <button>Button</button>;
});
