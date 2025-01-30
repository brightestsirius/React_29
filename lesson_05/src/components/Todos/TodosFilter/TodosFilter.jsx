import React, { useState, useEffect } from "react";

import {
  TODOS_FILTER_ALL,
  TODOS_FILTER_COMPLETED,
  TODOS_FILTER_PROGRESS,
} from "../../../constants/todos";

export default function TodosFilter({liftingFilter}) {
  const [filter, setFilter] = useState(TODOS_FILTER_ALL);

  const handleSelect = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    liftingFilter(filter);
  }, [filter]);

  return (
    <select onChange={handleSelect} defaultValue={filter}>
      <option value={TODOS_FILTER_ALL}>All</option>
      <option value={TODOS_FILTER_COMPLETED}>Completed</option>
      <option value={TODOS_FILTER_PROGRESS}>Progress</option>
    </select>
  );
}
