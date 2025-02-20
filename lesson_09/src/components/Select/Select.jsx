import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SORT_ASC, SORT_DESC } from "./../../constants/sort";

export default function Select() {
  const [sort, setSort] = useState(SORT_ASC);

  const handleSelect = (e) => setSort(e.target.value);

  return (
    <>
      <select onChange={handleSelect} defaultValue={sort}>
        <option value={SORT_ASC}>{SORT_ASC}</option>
        <option value={SORT_DESC}>{SORT_DESC}</option>
      </select>
      <br></br><br></br>
      <Link to={`/todos?sort=${sort}`}>Todos sort by {sort}</Link>
    </>
  );
}