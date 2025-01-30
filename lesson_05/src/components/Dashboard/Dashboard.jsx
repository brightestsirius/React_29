import React, { useState } from "react";

import Statistics from "./Statistics/Statistics";
import ColorPicker from "./ColorPicker/ColorPicker";
import List from "./List/List";

import ListContext from "../../contexts/ListContext";
import ListColorContext from "../../contexts/ListColorContext";

export default function Dashboard() {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(`#9C27B0`);

  return (
    <ListContext.Provider value={ {list, setList} }>
      <Statistics />

      <ListColorContext.Provider value={{ color, setColor }}>
        <ColorPicker />
        <List />
      </ListColorContext.Provider>
    </ListContext.Provider>
  );
}
