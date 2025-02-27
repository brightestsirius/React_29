import React from "react";

export default function Input({ type = "text", onChange, onBlur, value, ref }) {
  return (
    <input
      type={type}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={ref}
    />
  );
}
