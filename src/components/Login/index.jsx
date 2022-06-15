import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import googleLogo from "../../assets/img/logoGoogle.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const errorMessages = {
  required: "Este campo es obligatorio",
  email: "Debe introducir un email valido.",
  min: (n) => `Debe tener un mínimo de ${n} caracteres`,
};

const schema = yup.object({
  store_email: yup
    .string()
    .required(errorMessages.required)
    .email(errorMessages.email)
    .matches(emailRegex, errorMessages.email),
  password: yup
    .string()
    .required(errorMessages.required)
    .min(8, errorMessages.min(8))
    .matches(
      passwordRegex,
      "La contraseña debe tener al menos una mayuscula, una minuscula y un numero."
    ),
  
});

export default function Login() {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();
  const [currentUser, setCurrentUser] = useState(user);
 const [isLogged, setIsLogged] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  useEffect(() => {
    setCurrentUser(user);
    if(user){
      navigate('/');
    }
  }, [user]);

  const messageToBack = async () => {
    const token = await headerToken();
    try {
      const res = await axios.get("http://localhost:3003/api/test", {
        headers: {
          ...token,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const submitData = async (data) => {
      await login(data.email,data.password);
  }

  return (
    <div className="container-form container">
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit(submitData)}>
        <input
          {...register("email")}
          className="input"
          type="email"
          placeholder="Correo"
          name="email"
        />

        <input
         {...register("password")}
          className="input"
          type="password"
          placeholder="Contraseña"
          name="password"
        />

        <button type="submit" className="primary-button">
          Login
        </button>
      </form>
      <p className="divider">ó</p>
      {/* {isLogged ? currentUser.displayName : "Not logged"} */}
      {isLogged ? <button onClick={async () => signout()}>Signout</button> : ""}
      <button
        className="button-google primary-button"
        onClick={loginWithGoogle}
      >
        <img src={googleLogo}></img>
        Login with Google
      </button>
    </div>
  );
}
