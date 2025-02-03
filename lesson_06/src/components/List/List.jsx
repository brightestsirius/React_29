import React, { useState, useEffect } from "react";

import service from "../../services/todos";

import ListItem from "./ListItem";

export default function List() {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteItem = async (id) => {
    try {
      await service.delete(id);
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return list.length ? (
    <ul>
      {list.map((item) => (
        <ListItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ul>
  ) : null;
}
