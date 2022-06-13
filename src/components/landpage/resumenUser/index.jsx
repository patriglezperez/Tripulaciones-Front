import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import ResumenCard from "./ResumenCard";

const ResumenUser = () => {
  const navigate = useNavigate();
  console.log(useAuth().user);
  return (
    <>
      <div className="resumen-user-container">
        {useAuth().user === null ? (
          <div className="resumen-user">
            <button
              className="primary-button"
              onClick={() => navigate("login")}
            >
              iniciar sesion
            </button>
            <button
              className="secondary-button"
              onClick={() => navigate("singin")}
            >
              registrarse
            </button>
          </div>
        ) : (
          <ResumenCard />
        )}
      </div>
    </>
  );
};
export default ResumenUser;
