import React, { useState, useEffect } from "react";

import service from "../services/todosAxios";

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await service.get();
      setTodos(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await service.delete(id);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const completedItem = async (item) => {
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
      await service.post(item);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return { todos, deleteItem, completedItem, addNewTodo };
}
