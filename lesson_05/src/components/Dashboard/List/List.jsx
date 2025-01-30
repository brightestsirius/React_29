import React, { useContext, useEffect } from "react";

import service from "./../../../services/todosAxios";

import ListItem from "./ListItem";

import ListContext from "../../../contexts/ListContext";

export default function List() {
  const {list, setList} = useContext(ListContext);

  const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
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
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  ) : null;
}
