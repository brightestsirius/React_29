import React, { useState, useEffect } from "react";
import "./style.sass";

import service from "./../../services/todosAxios";

import TodosItem from "./TodosItem/TodosItem";

// CRUD – RDU
// smart & dumb coomponents

export default function Todos() {
  const [todos, setTodos] = useState([]);

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
      const response = await service.patch(item.id, {
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
