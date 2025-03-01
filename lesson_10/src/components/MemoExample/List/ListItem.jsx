import React, { memo } from "react";

import Button from "./../Button/Button";

export default memo(function ListItem({ item, listItemCompleted }) {
  console.log(`📋 in ListItem`);

  return (
    <li
      style={{ textDecoration: item.completed && `underline` }}
      onClick={() => listItemCompleted(item)}
    >
      {item.title} <Button />
    </li>
  );
});
