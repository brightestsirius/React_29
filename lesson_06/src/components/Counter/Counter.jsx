import React, { useReducer, useRef, useState } from "react";

// Flux-architecture

import { reducer, initialState } from "./../../store/counter/reducer";
import { actionCreator } from "./../../store/store";
import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_MULTIPLY,
} from "./../../store/counter/actions";

export default function Counter() {
  const [color, setColor] = useState(`#e91e63`);

  const inputNumber = useRef();

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDecrement = () => {
    dispatch(actionCreator(COUNTER_DECREMENT));
  };

  const handleIncrement = () => dispatch(actionCreator(COUNTER_INCREMENT));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionCreator(COUNTER_MULTIPLY, inputNumber.current.value));
  };

  const handleColor = (e) => setColor(e.target.value);

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span style={{ color }}>{state.counter}</span>
      <button onClick={handleIncrement}>+</button>

      <form onSubmit={handleSubmit}>
        <input type="number" ref={inputNumber} />
        <button>Multiply</button>
      </form>

      <input type="color" defaultValue={color} onChange={handleColor} />
    </div>
  );
}
