import React, { useState, useEffect, useCallback } from "react";

import ColorPicker from "./ColorPicker/ColorPicker";
import List from "./List/List";

import service from "../../services/list";

export default function MemoExample() {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(`#ed143d`);

  //const list = listInit.sort((a, b) => b.completed - a.completed);

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
    } catch (err) {
      console.log(err);
    }
  };

  const listItemCompleted = useCallback(async (item) => {
    try {
      await service.put(item.id, { completed: !item.completed });
      // setList(prevState => prevState.map(item => {
      //   if(item.id === response.id) item = response;
      //   return item;
      // }))
      getList();
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{border: `2px solid ${color}`}}>
      <ColorPicker color={color} setColor={setColor} />
      <List list={list} listItemCompleted={listItemCompleted} />
    </div>
  );
}
