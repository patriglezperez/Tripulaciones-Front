import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <p className="nav-item" onClick={() => navigate("/")}>
          inicio
        </p>
        <p className="nav-item" onClick={() => navigate("/business/type")}>
          tiendas
        </p>
        <p className="nav-item">perfil</p>
        <p className="nav-item">carrito</p>
      </div>
    </>
  );
};
export default Nav;
