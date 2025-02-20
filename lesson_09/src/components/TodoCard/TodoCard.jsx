import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import service from "./../../services/todos";

export default function TodoCard() {
  const { id } = useParams();

  const [todoItem, setTodoItem] = useState({});

  const getTodos = async () => {
    try {
      const response = await service.get(id);
      setTodoItem(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return Object.keys(todoItem).length ? (
    <ul>
      <li>Title: {todoItem.title}</li>
      <li>Completed: {String(todoItem.completed)}</li>
    </ul>
  ) : null;
}
