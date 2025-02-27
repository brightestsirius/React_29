import React from "react";
import { useController } from "react-hook-form";

export default function InputController({ control, name, type = "text" }) {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });

  return <input {...field} type={type} />;
}
