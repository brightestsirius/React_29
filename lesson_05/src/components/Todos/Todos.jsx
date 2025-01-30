import React from "react";
import "./style.sass";

import TodosForm from "./TodosForm/TodosForm";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";

import useTodos from "./../../hooks/useTodos";
import useTodosFilter from "./../../hooks/useTodosFilter";

export default function Todos() {
  const { todos, addNewTodo, deleteItem, completedItem } = useTodos();
  const { filteredTodos, setFilter } = useTodosFilter(todos);

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
