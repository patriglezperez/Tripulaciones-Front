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
  name: yup.string().required().min(2).max(100),
  doctype: yup.string().notRequired(),
  docnum: yup.string().notRequired(),
  address1: yup.string().required().min(2).max(100),
  address2: yup.string().notRequired().max(100).nullable(true),
  cp: yup
    .number()
    .test(
      "equalsDigits",
      "number field must have exactly 5 digits",
      (number) => String(number).length === 5,
    )
    .required()
    .positive()
    .integer()
    .typeError("cp must be an integer number"),

  tlf: yup.string().notRequired().max(20).nullable(true),
  password: yup
    .string()
    .required()
    .min(8, "password is to short, must be minimun 8 characters")
    .matches(
      passwordRegex,
      "password needs at list an Uppercase, lowercase and number",
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
    <div className="container-form container">
      <h1>registrarse</h1>
      <form
        className="form"
        onSubmit={handleSubmit((data) => {
          reset();
        })}
      >
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="input"
        />
        {<p>{errors.email?.message}</p>}
        <input {...register("name")} placeholder="Name" className="input" />
        {<p>{errors.name?.message}</p>}
        <input
          {...register("address1")}
          placeholder="Address1"
          className="input"
        />
        {<p>{errors.address1?.message}</p>}
        <input
          {...register("address2")}
          placeholder="Address2"
          className="input"
        />
        {<p>{errors.address2?.message}</p>}
        <input {...register("cp")} placeholder="Cp" className="input" />
        {<p>{errors.cp?.message}</p>}
        {/* <select {...register("doctype")} defaultValue="Document type">

          <option disabled>Document type</option>
          <option value="id">ID</option>
          <option value="passport">Passport</option>
        </select>
        {<p>{errors.doctype?.message}</p>}
        <input {...register("docnum")} placeholder="Document Number" />
        {<p>{errors.docnum?.message}</p>} */}
        <input
          type="tel"
          {...register("tlf")}
          placeholder="Telephone number"
          className="input"
        />
        {<p>{errors.tlf?.message}</p>}
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="input"
        />
        {<p>{errors.password?.message}</p>}

        <button className="primary-button">registrarse</button>
      </form>
    </div>
  );
};
export default RegisterForm;
