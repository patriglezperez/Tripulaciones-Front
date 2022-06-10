import OwnerProfile from "../OwnerProfile/OwnerProfile";
import Fruteria from "../../assets/img/fruteria.jpg";
import BusinessMap from "./BusinessMap";
import React, { useState } from "react";
import ContactShop from "../ContactShop/ContactShop";
import ShopPresentation from "../ShopPresentation/ShopPresentation";

function LandingShop() {
  const [adress, setAdress] = useState("");
  let store = {
    store_address: "C. Dr. Esquerdo, 110, 28007 Madrid, España",
    store_name: "Frutas y verduras",
    latitude_coordinates: 41.40338,
    longitude_coordinates: 2.17403,
  };

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

      {/* About owner*/}
      <OwnerProfile />

      {/* About business*/}
      <ShopPresentation />

      <ContactShop />
      {/* [{coordinates:[lat,lng]}] */}
      {/* Address */}
      <div className="landingShop--address--elements">
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
