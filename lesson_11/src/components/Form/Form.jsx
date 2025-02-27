import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "./../Input/Input";
import InputController from "./../InputController/InputController";

const schema = z.object({
  email: z.string().email({ message: `Custom email error` }),
  password: z.string().min(5, { message: `Custom pass validation` }),
  username: z.string().min(5).max(10),
});

export default function Form() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: `sheva@gmail.com`,
      password: ``,
      username: `Taras`
    },
    mode: `onBlur`,
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => <Input {...field} type="email" />}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <Controller
        name="password"
        control={control}
        render={({ field }) => <Input {...field} type="password" />}
      />
      {errors.password && <p>{errors.password.message}</p>}

      <InputController control={control} name={"username"} />

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}