import OwnerProfile from "../OwnerProfile/OwnerProfile";

import Fruteria from "../../assets/img/fruteria.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Map from "../../components/Map/index";
import React, { useState, useEffect } from "react";

function LandingShop() {
  let store = {
    store_address: "C. Dr. Esquerdo, 110, 28007 Madrid, España",
    store_name: "Frutas y verduras",
    latitude_coordingitates: -3.74,
    longitude_coordinates: 40.38,
  };

  const [mapModal, setMapModal] = useState(false);
  const [lng, setLng] = useState(store.latitude_coordinates);
  const [lat, setLat] = useState(store.longitude_coordinates);
  const [businessPosition, setBusinessPosition] = useState(null);

  //open and close the map view
  const openMap = (e) => {
    e.preventDefault();
    setMapModal(!mapModal);
  };

  // we will create the position of the business with the coordinates
  useEffect(() => {
    setBusinessPosition({ lat, lng });
  }, []);

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
        <LocationOnOutlinedIcon fontSize="large" />
        <div className="landingShop--address--text">
          <p>{store.store_address}</p>
          {mapModal === false ? (
            <button onClick={openMap}>Haz click para abrir el mapa</button>
          ) : (
            <div className="landingShop--address--map">
              <button onClick={openMap}>x</button>
              <Map className="landingShop--address--map" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default LandingShop;
