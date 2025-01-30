import React from "react";

import TodosItem from "../TodosItem/TodosItem";

export default function TodosList({
  todos,
  completedItem,
  deleteItem,
}) {
  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <TodosItem
          key={item.id}
          item={item}
          completedItem={completedItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  ) : null;
}
