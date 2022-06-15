import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import ResumenCard from "./ResumenCard";

const ResumenUser = () => {
  const navigate = useNavigate();
  return (
    // <>
    //   <div className="resumen-user-container">
    //     {useAuth().user === null ? (
    //       <div className="resumen-user">
    //         <button
    //           className="primary-button"
    //           onClick={() => navigate("login")}
    //         >
    //           iniciar sesion
    //         </button>
    //         <button
    //           className="secondary-button"
    //           onClick={() => navigate("signin")}
    //         >
    //           registrarse
    //         </button>
    //       </div>
    //     ) : (
    //       <ResumenCard />
    //     )}
    //   </div>
    // </>
    <ResumenCard />
  );
};
export default ResumenUser;
