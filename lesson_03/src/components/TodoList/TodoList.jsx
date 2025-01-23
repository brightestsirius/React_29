import React, { useState, useEffect } from "react";

import TodoItem from "./../TodoItem/TodoItem";

import { TODO_COMPLETED, TODO_NON_COMPLETED } from "./../../constants/todo";

export default function TodoList({
  todos: todosProps,
  getTodos,
  deleteTodoItem,
  completeTodoItem,
  filter,
}) {
  const [todos, setTodos] = useState(todosProps);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setTodos(todosProps);
  }, [todosProps]);

  useEffect(() => {
    switch (filter) {
      case TODO_COMPLETED:
        setTodos(todosProps.filter((item) => item.completed));
        break;
      case TODO_NON_COMPLETED:
        setTodos(todosProps.filter((item) => !item.completed));
        break;
      default:
        setTodos(todosProps);
    }
  }, [filter, todosProps]);

  const handleItemRemove = (e, id) => {
    e.stopPropagation();
    deleteTodoItem(id);
  };

  const handleItemCompleted = (item) => {
    completeTodoItem(item);
  };

  return todos.length ? (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleItemRemove={handleItemRemove}
          handleItemCompleted={handleItemCompleted}
        />
      ))}
    </ul>
  ) : null;
}
