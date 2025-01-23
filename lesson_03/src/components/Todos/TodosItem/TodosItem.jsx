import React from "react";

import Button from './../../Button/Button'

export default function TodosItem({
  item,
  handleItemCompleted,
  handleItemDelete,
}) {
  const getClassName = (item) => {
    const classes = [`item`];
    item.completed && classes.push(`item--completed`);
    return classes.join(` `);
  };

  return (
    <li
      className={getClassName(item)}
      onClick={() => handleItemCompleted(item)}
    >
      {item.title}{" "}
      <Button title="Delete" handleClick={(e) => handleItemDelete(e, item.id)} />
    </li>
  );
}
