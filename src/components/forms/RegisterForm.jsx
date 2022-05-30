import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const schema = yup.object({
  email: yup
    .string()
    .required()
    .email()
    .matches(emailRegex, "Email is not a valid email"),
  name: yup.string().required().min(2),
  surname: yup.string().required().min(2),
  address: yup.string().required().min(2),
  password: yup
    .string()
    .required()
    .min(8, "password is to short, must be minimun 8 characters")
    .matches(
      passwordRegex,
      "password needs at list an Uppercase, lowercase and number"
    ),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

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
      <input type="email" {...register("email")} placeholder="Email" />
      {<p>{errors.email?.message}</p>}
      <input {...register("name")} placeholder="Name" />
      {<p>{errors.name?.message}</p>}
      <input {...register("surname")} placeholder="Surname" />
      {<p>{errors.surname?.message}</p>}
      <input {...register("address")} placeholder="Address" />
      {<p>{errors.address?.message}</p>}

      <input type="password" {...register("password")} placeholder="Password" />
      {<p>{errors.password?.message}</p>}
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
