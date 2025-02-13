import React from "react";
import { Link } from "react-router-dom";

import TodoCard from "./../components/TodoCard/TodoCard";
import NavigationBtn from './../components/NavigationBtn/NavigationBtn'

export default function TodoRoute() {
  return (
    <div>
      <h2>Todo Route</h2>
      <TodoCard />
      <NavigationBtn title={`todos`} navPath={`/todos`} />
    </div>
  );
}
