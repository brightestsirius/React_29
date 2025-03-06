import React from "react";
import { useTodos } from "./hooks/useTodos";

const TodoList = () => {
  const { todos, error, isLoading, deleteTodo } = useTodos();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading todos.</p>;

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.length && todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;