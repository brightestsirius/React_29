import React, { useState, useEffect } from "react";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../constants/todos";

export default function useTodosFilter(todos) {
  const [filteredTodos, setFilteresTodos] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    switch (filter) {
      case TODOS_FILTER_COMPLETED:
        setFilteresTodos(todos.filter((item) => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteresTodos(todos.filter((item) => !item.completed));
        break;
      case TODOS_FILTER_ALL:
      default:
        setFilteresTodos(todos);
    }
  }, [todos, filter]);

  return { filteredTodos, setFilter };
}
