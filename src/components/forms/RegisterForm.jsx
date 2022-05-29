import React from "react";
import { useForm } from "react-hook-form";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const required = {
    required: "This field cannot be empty",
  };
  const emailValidation = {
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "invalid email address",
    },
  };
  const passwordValidation = {
    pattern: {
      value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      message:
        "Your password is not strong enough, it must contain numbers, Uppercase and LowerCase.",
    },
  };

  //It will post the form data to the backend using a helper
  /* const handlePostForm = async(data) => {
    postUser(data, jwt);
  } */

  return (
    <form
      onSubmit={handleSubmit((data) => {
        //handlePostForm(data)
        reset();
      })}
    >
      <input
        type="email"
        {...register("email", { ...required, ...emailValidation })}
        placeholder="Email"
      />
      {errors.email?.type === "required" && <p>{errors.email.message}</p>}
      {errors.email?.type === "pattern" && <p>{errors.email.message}</p>}

      <input
        {...register("name", {
          ...required,
          minLength: { value: 2, message: "Name is too short" },
        })}
        placeholder="Name"
      />
      {errors.name?.type === "required" && <p>{errors.name.message}</p>}
      {errors.name?.type === "minLength" && <p>{errors.name.message}</p>}
      <input
        {...register("surname", {
          ...required,
          minLength: { value: 2, message: "Surname is too short" },
        })}
        placeholder="Surname"
      />
      {errors.surname?.type === "required" && <p>{errors.surname.message}</p>}
      {errors.surname?.type === "minLength" && <p>{errors.surname.message}</p>}

      <input {...register("address", { ...required })} placeholder="Address" />
      {errors.address?.type === "required" && <p>{errors.address.message}</p>}

      <input
        type="password"
        {...register("password", {
          ...required,
          minLength: {
            value: 8,
            message: "password length must be 8 or greater",
          },
          ...passwordValidation,
        })}
        placeholder="Password"
      />
      {errors.password?.type === "required" && <p>{errors.password.message}</p>}
      {errors.password?.type === "pattern" && <p>{errors.password.message}</p>}
      {errors.password?.type === "minLength" && (
        <p>{errors.password.message}</p>
      )}
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
