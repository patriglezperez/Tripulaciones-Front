import OwnerProfile from "../OwnerProfile/OwnerProfile";
import ShopPresentation from "../ShopPresentation/ShopPresentation";
import ContactShop from "../ContactShop/ContactShop";
import Fruteria from "../../assets/img/fruteria.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

function LandingShop() {
  let individualShop = {
    Address: "C. Dr. Esquerdo, 110, 28007 Madrid, España",
    LocalName: "Frutas y verduras",
  };

  return (
    <>
      {/* Landing Image */}
      <div className="landingShop--container">
        <img src={Fruteria} alt="comercio" className="landingShop--img" />

        <div className="landingShop--shop--name">
          {individualShop.LocalName}
        </div>
      </div>

      {/* Address */}
      <div className="landingShop--address--elements">
        <LocationOnOutlinedIcon fontSize="large" />
        <div className="landingShop--address--text">
          <p>{individualShop.Address}</p>
          <p className="gray">Haz clic para abrir el mapa</p>
        </div>
      </div>
      <hr />

      {/* Notifications */}
      <div className="landingShop--notifications--container">
        <div className="landingShop--notifications">
          <p>Activar notificaciones</p>
          <label className="switch">
            <input type="checkbox" value="activated" />

            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* About */}
      <OwnerProfile />
      <ShopPresentation />
      <ContactShop />

      {/* Map */}
      <iframe
        title="Fruteria"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12403.433083489288!2d-3.9162979005756604!3d38.99573089936011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6bc3db33b77f35%3A0xb8c25f293e1d5424!2sFruteria%20Cristian!5e0!3m2!1ses!2ses!4v1654035585311!5m2!1ses!2ses"
        // width="600"
        // height="450"
        className="landingShop--map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <hr />
    </>
  );
}
export default LandingShop;
