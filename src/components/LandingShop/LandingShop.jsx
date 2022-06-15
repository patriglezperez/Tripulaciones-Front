import OwnerProfile from "../../components/LandingShop/OwnerProfile/OwnerProfile";
import FruitShop from "../../assets/img/fruteria.jpg";
import BusinessMap from "./BusinessMap/BusinessMap";
import React, { useState } from "react";
import ContactShop from "./ContactShop/ContactShop";
import ShopPresentation from "../../components/LandingShop/ShopPresentation/ShopPresentation";
import { useLocation, useNavigate , useParams} from "react-router-dom";
import {store as storeA} from "../../App"


function LandingShop({}) {
  // let store = {
  //   store_address: "C. Dr. Esquerdo, 110",
  //   store_name: "Frutas y verduras",
  //   latitude_coordinates: 41.40338,
  //   longitude_coordinates: 2.17403,
  // };
  let storeId = useParams().id;
  let store = storeA.filter(e=>e.uuid_store === storeId)[0];
  console.log(store, "STORE")
  console.log("params",useParams())
  
 
  const [mapModal, setMapModal] = useState(false);
  const lng = store.latitude_coordinates;
  const lat = store.longitude_coordinates;
  console.log(lng, "lng")
  const coordinates = [lat, lng];

  return (
    <>
      {/* Landing Image */}
      <div className="landingShop--container">
        <img src={FruitShop} alt="comercio" className="landingShop--img" />

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
      <OwnerProfile store={store} />

      {/* Business Description*/}
      <ShopPresentation store={store} />

      {/* Contact*/}
      <ContactShop store={store} />

      {/* Map */}
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
