import React, { useState, useEffect } from "react";

import service from "../services/todos";

export default function useTodo() {
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

  const completeItem = async (item) => {
    try {
      await service.put(item.id, {
        completed: !item.completed,
      });
      getTodos();
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

  return { todos, deleteItem, completeItem, addNewTodo };
}