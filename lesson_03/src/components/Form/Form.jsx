import React, { useState } from "react";

import service from "./../../services/todos";

export default function Form({liftingNewTodo}) {
  const [newTodo, setNewTodo] = useState({
    title: `New todo`,
    completed: true,
  });

  const handleFormTitle = (e) =>
    setNewTodo((prevState) => ({ ...prevState, title: e.target.value }));
  const handleFormCompleted = (e) =>
    setNewTodo((prevState) => ({ ...prevState, completed: e.target.checked }));
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await service.post(newTodo);
      liftingNewTodo(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="todos__form" onSubmit={handleFormSubmit}>
      <label>
        Title:{" "}
        <input
          type="text"
          defaultValue={newTodo.title}
          onChange={handleFormTitle}
        />
      </label>
      <label>
        Completed:{" "}
        <input
          type="checkbox"
          defaultChecked={newTodo.completed}
          onChange={handleFormCompleted}
        />
      </label>
      <button>Add todo</button>
    </form>
  );
}
