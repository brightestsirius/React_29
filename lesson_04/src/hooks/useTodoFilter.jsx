import React, { useState, useEffect } from "react";

import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../constants/todos";

export default function useTodoFilter(todos) {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFilteredTodos(todos.filter((item) => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteredTodos(todos.filter((item) => !item.completed));
        break;
      default:
        setFilteredTodos(todos);
    }
  }, [todos, filter]);

  return { filteredTodos, setFilter };
}