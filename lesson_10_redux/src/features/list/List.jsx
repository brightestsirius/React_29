import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchList,
  fetchListItemCompleted,
} from "./../../store/features/list/thunks";

export default function List() {
  const {list, listColor, isLoading, isError} = useSelector((state) => state.listReducer);
  const dispatch = useDispatch();

  const handleItemCompleted = (item) => dispatch(fetchListItemCompleted(item));

  useEffect(() => {
    dispatch(fetchList());
  }, []);

  return isLoading ? <p>Loading....</p> : list.length ? (
    <ul>
      {list.map((item) => (
        <li
          key={item.id}
          style={{ color: item.completed && listColor }}
          onClick={() => handleItemCompleted(item)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  ) : null;
}
