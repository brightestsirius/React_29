import React, { useState, useEffect } from "react";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);

  useEffect(() => {
    console.log(`in useEffect`, list);

    setTimeout(() => {
        setList([...list, `ALEH`]);
      }, 1000);
  }, []);

  useEffect(() => {
    console.log(`in useEffect for list`, list);
    if(list[list.length-1] === `ALEH`){
        setTimeout(() => {
            setList([...list, `TETIANA`]);
        }, 1000)
    }
  }, [list]);

  return Array.isArray && list.length ? (
    <ul>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
