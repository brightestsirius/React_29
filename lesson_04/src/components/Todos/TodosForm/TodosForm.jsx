import React, { useRef, useState } from "react";

import service from "./../../../services/todosAxios";

import { NEW_TODO_DEFAULT } from "../../../constants/todos";

// lifting state up

export default function TodosForm({liftingNewTodo}) {
  const inputTitle = useRef();
  const inputCompleted = useRef();
  const formRef = useRef();

  const [newTodo, setNewTodo] = useState(NEW_TODO_DEFAULT);

  const handleFormTitle = (e) => {
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleFormCompleted = (e) => {
    setNewTodo((prevState) => {
      return { ...prevState, completed: e.target.checked };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    liftingNewTodo(newTodo);
  };

  return (
    <form className="todo__form" onSubmit={handleFormSubmit} ref={formRef}>
      <label>
        Title{" "}
        <input
          type="text"
          ref={inputTitle}
          defaultValue={newTodo.title}
          onChange={handleFormTitle}
        />
      </label>
      <label>
        Completed{" "}
        <input
          type="checkbox"
          ref={inputCompleted}
          defaultChecked={newTodo.completed}
          onChange={handleFormCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
