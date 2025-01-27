import React from "react";

import Button from "./../../Button/Button";

export default function TodosItem({ item, completeItem, deleteItem }) {
  const getClassName = (item) => {
    const classes = [`item`];
    item.completed && classes.push(`item--completed`);
    return classes.join(` `);
  };

  const handleItemDelete = (e, id) => {
    e.stopPropagation();
    deleteItem(id);
  };

  return (
    <li className={getClassName(item)} onClick={() => completeItem(item)}>
      {item.title}{" "}
      <Button
        title="Delete"
        handleClick={(e) => handleItemDelete(e, item.id)}
      />
    </li>
  );
}
