import React from "react";
import "./style.sass";

import TodosForm from "./TodosForm/TodosForm";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";

import useTodos from "../../hooks/useTodos";

export default function Todos() {
  const {
    filteredTodos,
    setFilter,
    handleItemDelete,
    handleItemCompleted,
    addNewTodo,
  } = useTodos();

  return (
    <>
      <TodosForm liftingNewTodo={addNewTodo} />
      <TodosFilter liftingFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        handleItemCompleted={handleItemCompleted}
        handleItemDelete={handleItemDelete}
      />
    </>
  );
}
