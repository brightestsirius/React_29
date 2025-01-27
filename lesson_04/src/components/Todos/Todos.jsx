import React, { useState, useEffect } from "react";
import "./style.sass";

import service from "./../../services/todosAxios";

import TodosForm from "./TodosForm/TodosForm";
import TodosFilter from './TodosFilter/TodosFilter'
import TodosList from "./TodosList/TodosList";

import {TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS} from './../../constants/todos'

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteresTodos] = useState([]);
  const [filter, setFilter] = useState();

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
      //setTodos((prevState) => prevState.filter((item) => item.id !== id));
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

  useEffect(() => {
    console.log(`in useEffect in Todos Component for todos: ${todos.length} & filter: ${filter}`);

    switch(filter){
      case TODOS_FILTER_COMPLETED:
        setFilteresTodos(todos.filter(item => item.completed));
        break;
      case TODOS_FILTER_PROGRESS:
        setFilteresTodos(todos.filter(item => !item.completed));
        break;
      case TODOS_FILTER_ALL:
      default:
        setFilteresTodos(todos);
    }
  }, [todos, filter])

  return (
    <>
      <TodosForm liftingNewTodo={addNewTodo} />
      <TodosFilter liftingFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        deleteItem={deleteItem}
        completedItem={completedItem}
      />
    </>
  );
}