import { useState, useEffect } from "react";
import logo from "../../assets/img/iconLogo.svg";
import NavMovil from "./NavMobile";
import Nav from "./Nav";
import mobile from "../../assets/scss/variables.scss";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  let regex = /(\d+)/g;
  const widthMobile = mobile.mobile.match(regex)[0];

  const handleResize = () => {
    setWidth(window.innerWidth);
    setNavOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="nav-bar">
        <div className="container nav-bar-container">
          <div className="logo-container ">
            <img onClick={() => navigate("/")} src={logo} />
            <h1>tu barrio</h1>
          </div>

          {width > widthMobile ? (
            <Nav></Nav>
          ) : (
            <NavMovil navOpen={navOpen} setNavOpen={setNavOpen} />
          )}

          <div className="button-nav-container container">
            <button
              onClick={() => {
                setNavOpen(!navOpen);
              }}
              className="button-nav-bar"
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
