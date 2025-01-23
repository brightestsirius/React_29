import React, { useState, useEffect } from "react";

import {
  TODO_ALL,
  TODO_COMPLETED,
  TODO_NON_COMPLETED,
} from "./../../constants/todo";

export default function Filter({ liftingFilter }) {
  const [filter, setFilter] = useState(TODO_ALL);

  const handleSelect = (e) => setFilter(e.target.value);

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <select defaultValue={filter} onChange={handleSelect}>
      <option value={TODO_ALL}>All</option>
      <option value={TODO_COMPLETED}>Completed</option>
      <option value={TODO_NON_COMPLETED}>Non-completed</option>
    </select>
  );
}
