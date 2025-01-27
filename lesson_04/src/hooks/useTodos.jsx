import React, { useState, useEffect } from "react";

import service from "../services/todosAxios";
import {
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "./../constants/todos";

export default function useTodos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState();
  const [filteredTodos, setFilteredTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await service.get();
      setTodos(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

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

  const handleItemDelete = async (e, id) => {
    e.stopPropagation();
    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
      // getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const handleItemCompleted = async (item) => {
    try {
      const response = await service.put(item.id, {
        completed: !item.completed,
      });
      setTodos((prevState) =>
        prevState.map((element) => {
          if (element.id === response.id) element = response;
          return element;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const addNewTodo = async (item) => {
    try {
      const response = await service.post(item);
      setTodos((prevState) => [...prevState, response]);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    filteredTodos,
    setFilter,
    handleItemDelete,
    handleItemCompleted,
    addNewTodo,
  };
}