import React, { useState, useEffect } from "react";

import ColorPicker from "./ColorPicker/ColorPicker";
import List from "./List/List";

import service from "../../services/list";

export default function MemoExample() {
  const [listInit, setList] = useState([]);
  const [color, setColor] = useState(`#ed143d`);

  const list = listInit.sort((a, b) => b.completed - a.completed);

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  const listItemCompleted = async (item) => {
    try {
      await service.put(item.id, { completed: !item.completed });
      getList();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <ColorPicker color={color} setColor={setColor} />
      <List list={list} listItemCompleted={listItemCompleted} color={color} />
    </>
  );
}
