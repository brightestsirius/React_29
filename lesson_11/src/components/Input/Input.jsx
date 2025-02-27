import React from "react";
import { useController } from "react-hook-form";

export default function Input({ control, name, type = `text` }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  return <input type={type} {...field} />;
}
