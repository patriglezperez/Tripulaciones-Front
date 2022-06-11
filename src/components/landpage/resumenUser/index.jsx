import React from "react";
import { useNavigate } from "react-router-dom";

const ResumenUser = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="resumen-user">
        <button className="primary-button" onClick={() => navigate("login")}>
          iniciar sesion
        </button>
        <button className="secondary-button" onClick={() => navigate("singin")}>
          registrarse
        </button>
      </div>
    </>
  );
};
export default ResumenUser;
