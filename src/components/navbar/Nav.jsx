import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav-container">
        <p className="nav-item">inicio</p>
        <p className="nav-item">tiendas</p>
        <p className="nav-item">perfil</p>
        <p className="nav-item">carrito</p>
      </div>
    </>
  );
};
export default Nav;
