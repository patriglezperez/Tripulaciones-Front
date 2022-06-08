import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Map from "../Map";
import * as yup from "yup";
import { useAuth } from "../../context/authContext"; 
import postBusiness from "../../utils/connections/postBusiness";
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const errorMessages = {
  required: "Este campo es obligatorio",
  email: "Debe introducir un email valido.",
  max: (n) => `Debe tener un máximo de ${n} caracteres`,
  min: (n) => `Debe tener un mínimo de ${n} caracteres`,
};

const schema = yup.object({
  store_email: yup
    .string()
    .required(errorMessages.required)
    .email(errorMessages.email)
    .matches(emailRegex, errorMessages.email),
  owner_name: yup
    .string()
    .required(errorMessages.required)
    .min(2, errorMessages.min(2))
    .max(100, errorMessages.max(100)),
  owner_last_name: yup
    .string()
    .required(errorMessages.required)
    .min(2, errorMessages.min(2))
    .max(100),
  store_name: yup
    .string()
    .required(errorMessages.required)
    .min(2, errorMessages.min(2))
    .max(100),
  store_phone_number: yup
    .string()
    .required(errorMessages.required)
    .max(20, errorMessages.max(20)),
  company_inscription: yup
    .string()
    .required(errorMessages.required)
    .min(2, errorMessages.min(2))
    .max(9, errorMessages.max(9)),
  password: yup
    .string()
    .required(errorMessages.required)
    .min(8, errorMessages.min(8))
    .matches(
      passwordRegex,
      "La contraseña debe tener al menos una mayuscula, una minuscula y un numero."
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

export default function RegisterBusinessForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { signup, updatename } = useAuth();
  const [adress, setAdress] = useState("");
  const [mapModal, setMapModal] = useState(false);

  const submitData = async(data) => {
    //User created in Firebase
    const userCreation = await signup(data.store_email, data.password);
    //We modify displayName to owner_name + owner_last_name
    await updatename(userCreation.user, data.owner_name, data.owner_last_name);
    //We create the business object 
    const business = {
      uuid_store: userCreation.user.uid,
      store_address:adress.place_name_es,
      latitude_coordinates:adress.geometry.coordinates[1],
      longitude_coordinates:adress.geometry.coordinates[0],
      ...data,
      password:null,
      confirm_password:null
    }
    const response = await postBusiness(business);
    console.log(business)
  };
  const openMap = (e) => {
    e.preventDefault();
    setMapModal(!mapModal);
  };
  return (
    <div className="register-business-container">
      <h2>RegisterBusinessForm</h2>
      {mapModal ? (
        <div className="register-business-map-container">
          <Map setMarker={setAdress} mapType="search" />
        div.register-business-confirm{adress?.place_name}
        <button onClick={openMap}>Close map</button>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(submitData)}>
        <input {...register("store_name")} placeholder="Nombre del negocio" />
        {<p>{errors.store_name?.message}</p>}
        <textarea
          {...register("description_store")}
          placeholder="Descripcion del negocio"
        />
        {<p>{errors.description_store?.message}</p>}
        {<p>{errors.store_name?.message}</p>}
        <button onClick={openMap}>Agregar direccion</button>
        <br />
        <input
          {...register("owner_name")}
          placeholder="Nombre del propietario"
        />
        {<p>{errors.owner_name?.message}</p>}
        <input
          {...register("owner_last_name")}
          placeholder="Apellidos del propietario"
        />
        {<p>{errors.owner_last_name?.message}</p>}
        <input {...register("company_inscription")} placeholder="CIF o VAT" />
        {<p>{errors.company_inscription?.message}</p>}

        <input
          type="tel"
          {...register("store_phone_number")}
          placeholder="Numero de telefono"
        />
        {<p>{errors.store_phone_number?.message}</p>}
        <input type="email" {...register("store_email")} placeholder="Email" />
        {<p>{errors.store_email?.message}</p>}
        <input
          type="password"
          {...register("password")}
          placeholder="Contraseña"
        />
        {<p>{errors.password?.message}</p>}
        <input
          type="password"
          {...register("confirm_password")}
          placeholder="Confirma la contraseña"
        />
        {<p>{errors.confirm_password?.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
