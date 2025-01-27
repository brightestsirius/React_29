import React from "react";
import "./style.sass";

import TodosForm from "./TodosForm/TodosForm";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";

import useTodo from "../../hooks/useTodo";
import useTodoFilter from "../../hooks/useTodoFilter";

export default function Todos() {
  const { todos, deleteItem, completeItem, addNewTodo } = useTodo();
  const { filteredTodos, setFilter } = useTodoFilter(todos);

  return (
    <>
      <TodosForm liftingTodo={addNewTodo} />
      <TodosFilter liftingFilter={setFilter} />
      <TodosList
        todos={filteredTodos}
        deleteItem={deleteItem}
        completeItem={completeItem}
      />
    </>
  );
}
