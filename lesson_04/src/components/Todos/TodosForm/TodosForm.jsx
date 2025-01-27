import React, { useRef } from "react";

export default function TodosForm({ liftingNewTodo }) {
  const formTitle = useRef();
  const formCompleted = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    liftingNewTodo({
      title: formTitle.current.value,
      completed: formCompleted.current.checked,
    });
  };

  return (
    <form className="todos__form" onSubmit={handleFormSubmit}>
      <label>
        Title: <input type="text" ref={formTitle} />
      </label>
      <label>
        Completed: <input type="checkbox" ref={formCompleted} />
      </label>
      <button>Add todo</button>
    </form>
  );
}
