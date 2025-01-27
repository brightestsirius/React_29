import React from "react";

import TodosItem from './../TodosItem/TodosItem'

export default function TodosList({todos, handleItemCompleted, handleItemDelete}) {
  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <TodosItem
          key={item.id}
          item={item}
          handleItemCompleted={handleItemCompleted}
          handleItemDelete={handleItemDelete}
        />
      ))}
    </ul>
  ) : null;
}
