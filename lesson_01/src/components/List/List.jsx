import React, { useState, useEffect } from "react";

export default function List({ list: propsList = [] }) {
  const [list, setList] = useState(propsList);
  const [intervalId, setIntervalId] = useState();
  const [listColor, setListColor] = useState();

  useEffect(() => {
    const removeInterval = setInterval(() => {
        setList(prevState => prevState.slice(0, -1));
    }, 1000);
    setIntervalId(removeInterval);
  }, []);

  useEffect(() => {
    if(list.length === Math.floor(propsList.length/2)){
        setListColor(`crimson`);
    }
  }, [list])

  useEffect(() => {
    if(list.length === Math.floor(propsList.length/2)){
        setListColor(`crimson`);
    }
  }, [list])

  return Array.isArray && list.length ? (
    <ul style={{color: listColor}}>
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  ) : null;
}
