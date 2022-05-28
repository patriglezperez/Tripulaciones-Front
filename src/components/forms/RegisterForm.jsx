import React, { useState } from "react";
import { useForm } from "react-hook-form";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
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
        {...register("email", { required: "This field cannot be empty" })}
        placeholder="Email"
      />
      <p>{errors.email?.message}</p>
      <input
        {...register("name", { required: "This field cannot be empty" })}
        placeholder="Name"
      />
      <p>{errors.name?.message}</p>
      <input
        {...register("surname", { required: "This field cannot be empty" })}
        placeholder="Surname"
      />
      <p>{errors.surname?.message}</p>
      <input
        {...register("address", { required: "This field cannot be empty" })}
        placeholder="Address"
      />
      <p>{errors.address?.message}</p>
      <input
        {...register("password", { required: "This field cannot be empty" })}
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
