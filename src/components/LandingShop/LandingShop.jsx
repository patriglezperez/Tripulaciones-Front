import OwnerProfile from "../OwnerProfile/OwnerProfile";
import Fruteria from "../../assets/img/fruteria.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import BusinessMap from "./BusinessMap";
import React, { useState } from "react";

function LandingShop() {
  const [adress, setAdress] = useState("");
  let store = {
    store_address: "C. Dr. Esquerdo, 110, 28007 Madrid, España",
    store_name: "Frutas y verduras",
    latitude_coordinates: 41.40338,
    longitude_coordinates: 2.17403,
  };

  //[{coordinates:[lat,lng]}]
  const [mapModal, setMapModal] = useState(false);
  const lng = store.latitude_coordinates;
  const lat = store.longitude_coordinates;

  const coordinates = [lat, lng];

  return (
    <>
      {/* Landing Image */}
      <div className="landingShop--container">
        <img src={Fruteria} alt="comercio" className="landingShop--img" />

        <div className="landingShop--shop--name">{store.store_name}</div>
      </div>

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

      <hr />
      {/* Address */}
      <div className="landingShop--address--elements">
        <div className="landingShop--address--text">
          <LocationOnOutlinedIcon fontSize="large" />
          <p>{store.store_address}</p>
        </div>
        {mapModal === false ? (
          <div className="landingShop--address--map">
            <BusinessMap
              current={{ mapType: "features", center: coordinates }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
export default LandingShop;
