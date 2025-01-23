import React, { useState } from "react";
import "./style.sass";

import Form from "./../Form/Form";
import Filter from "./../Filter/Filter";
import TodoList from "./../TodoList/TodoList";

import service from "./../../services/todos";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState();

  const addNewTodo = (todo) => setTodos((prevState) => [...prevState, todo]);

  const getTodos = async () => {
    try {
      const response = await service.get();
      setTodos(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      await service.delete(id);
      setTodos((prevState) => prevState.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const completeTodoItem = async (item) => {
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

  return (
    <>
      <Form liftingNewTodo={addNewTodo} />
      <Filter liftingFilter={setFilter} />
      <TodoList
        todos={todos}
        getTodos={getTodos}
        deleteTodoItem={deleteTodoItem}
        completeTodoItem={completeTodoItem}
        filter={filter}
      />
    </>
  );
}
