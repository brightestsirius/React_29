import React from "react";

import TodosItem from "./../TodosItem/TodosItem";

export default function TodosList({
  todos,
  completeItem,
  deleteItem,
}) {
  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <TodosItem
          key={item.id}
          item={item}
          completeItem={completeItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  ) : null;
}
