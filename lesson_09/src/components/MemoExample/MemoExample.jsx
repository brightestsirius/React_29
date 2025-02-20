import React, { useState, useMemo, useCallback } from "react";

export default function MemoExample() {
  const [color, setColor] = useState(`#000`);

  const [list, setList] = useState([
    `tiger`,
    `cat`,
    `lion`,
    `oleg`,
    `svitlana`,
    `simba`,
  ]);

  const getSortedList = () => {
    //console.log(`in sortedList`, list);
    return list.sort();
  };

  const sortedList = useMemo(getSortedList, [list]);

  const handleItemDelete = (item) => {
    setList((prevState) =>
      prevState.filter((element) => {
        return element !== item;
      })
    );
  };

  const getClass = () => {
    console.log(`in getClass`, list);
    const classes = [];
    if(color === `#ff0000`) classes.push(`error`);

    return classes.join(` `);
  }

  const getUlClass = useCallback(getClass, [color]);

  return (
    <div>
      <br></br>
      <br></br>

      <input type="color" defaultValue={color} onChange={(e) => setColor(e.target.value)} />
      <hr />
      <ul className={getUlClass()}>
        {sortedList.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleItemDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
