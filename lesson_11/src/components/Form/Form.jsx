import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email({message: `Custom email error`}),
  password: z.string().min(10, {message: `Не менше 10`}),
  confirmPassword: z.string().min(10),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm({
    mode: `onBlur`,
    defaultValues: {
      email: `default@gmail.com`,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  //   register(`email`) => [onChange, ondeviceorientationabsolute, value, ref];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        onChange={register(`email`).onChange}
        value={register(`email`).value}
        type="email"
      /> */}
      <input {...register(`email`)} type="email" />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register(`password`)} type="password" />
      {errors.password && <p>{errors.password.message}</p>}
      <input {...register(`confirmPassword`)} type="password" />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}
