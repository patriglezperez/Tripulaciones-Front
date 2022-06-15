import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({setNavOpen}) => {
  const navigate = useNavigate();
  const manageClick = text => {
    navigate(text);
    setNavOpen(false);
  }
  return (
    <>
      <div className="nav-container">
        <p className="nav-item" onClick={() => manageClick("/")}>
          inicio
        </p>
        <p className="nav-item" onClick={() => manageClick("/business/type")}>
          tiendas
        </p>
        <p className="nav-item" onClick={() =>{
          manageClick("/profile");
        }}>perfil</p>
        <p className="nav-item">carrito</p>
      </div>
    </>
  );
};
export default Nav;
