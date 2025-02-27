import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import Input from "./../Input/Input";

const schema = z.object({
  email: z.string().email({ message: `Custom email error` }),
  password: z.string().min(10, { message: `Не менше 10` }),
  confirmPassword: z.string().min(10),
});

export default function Form() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: `onBlur`,
    defaultValues: {
      email: `default@gmail.com`,
      password: ``,
      confirmPassword: ``,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //   register(`email`) => [onChange, onBlur, value, ref];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        onChange={register(`email`).onChange}
        value={register(`email`).value}
        type="email"
      /> */}
      <Input name={`email`} control={control} type="email" />
      {errors.email && <p>{errors.email.message}</p>}

      <Input name={`password`} control={control} type="password" />
      {errors.password && <p>{errors.password.message}</p>}

      <Input name={`confirmPassword`} control={control} type="password" />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
