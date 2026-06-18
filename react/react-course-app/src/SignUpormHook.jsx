import React from "react";
import { useForm } from "react-hook-form";

const SignUpormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(`submittes ${data.email}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpormHook;
