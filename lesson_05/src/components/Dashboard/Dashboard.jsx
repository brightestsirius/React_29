import React, { useState, useEffect } from "react";

import List from "./List/List";
import ListColorPicker from "./ListColorPicker/ListColorPicker";
import ListStatistics from "./ListStatistics/ListStatistics";

import service from "../../services/todosAxios";

import DashboardContext from './../../contexts/DashboardConext'

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(`#009688`);

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

  return (
    <DashboardContext.Provider value={{list, color, setColor}}>
      <ListStatistics />
      <ListColorPicker />
      <List />
    </DashboardContext.Provider>
  );
}
