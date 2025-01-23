import React from "react";
import Button from "./../Button/Button";

export default function TodoItem({
  item = {},
  handleItemRemove,
  handleItemCompleted,
}) {
  const getClassName = (item) => {
    const classes = [];
    item.completed && classes.push(`item--completed`);
    return classes.join(` `);
  };

  return (
    <li
      className={getClassName(item)}
      key={item.id}
      onClick={() => handleItemCompleted(item)}
    >
      {item.title}{" "}
      <Button title={`Remove`} clickFn={(e) => handleItemRemove(e, item.id)} />
    </li>
  );
}
