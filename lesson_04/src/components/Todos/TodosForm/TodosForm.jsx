import React, { useRef } from "react";

export default function TodosForm({ liftingTodo }) {
  const formTitle = useRef();
  const formCompleted = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    liftingTodo({
      title: formTitle.current.value,
      completed: formCompleted.current.checked,
    });
  };

  return (
    <form className="todos__form" onSubmit={handleSubmit}>
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
