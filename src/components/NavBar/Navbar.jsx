import { useLocation } from "react-router-dom";
import logo from "../../assets/img/jest_logo.png";

export default function NavBar() {
  const locationUrl = useLocation().pathname;

  //pages
  const clientView = "/shops";
  const ownerView = "/client";

  let iconRender;

  if (locationUrl.includes(clientView)) {
    iconRender = (
      <div className="Navbar--component">
        <div>
          <img src={logo} alt="logo" />
          <p>LOCALGREEN</p>
        </div>
        <div>
          <p>MI PERFIL</p>
          <p>MIS COMPRAS</p>
          <p>NOSOTROS</p>
        </div>
      </div>
    );
  } else if (locationUrl.includes(ownerView)) {
    iconRender = (
      <div className="Navbar--component">
        <div>
          <img src={logo} alt="logo" />
          <p>LOCALGREEN</p>
        </div>
        <p>AJUSTES PERFIL</p>
      </div>
    );
  }

  return (
    <>
      <header>{iconRender}</header>
    </>
  );
}
