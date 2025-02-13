import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

import service from "./../../services/todos";

import { SORT_ASC, SORT_DESC } from './../../constants/sort'

export default function TodosList() {
  const [todos, setTodos] = useState([]);
  const [sortedTodos, setSortedTodos] = useState([]);

  const [searchParams] = useSearchParams();
  const sort = searchParams.get(`sort`);

  const getTodos = async () => {
    try {
      const response = await service.get();
      setTodos(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    setSortedTodos(todos);
  }, [todos]);

  useEffect(()=>{
    switch(sort){
      case SORT_ASC:
        setSortedTodos(todos.sort((a,b) => a.completed-b.completed));
        break;
      case SORT_DESC:
        setSortedTodos(todos.sort((a,b) => b.completed-a.completed));
        break;
      default:
        setSortedTodos(todos);
    }
  }, [sort, todos])

  return todos.length ? (
    <ul>
      {sortedTodos.map((item) => (
        <li key={item.id}>
          <Link to={String(item.id)} style={{color: item.completed ? `crimson` : `black`}}>{item.title}</Link>
        </li>
      ))}
    </ul>
  ) : null;
}
