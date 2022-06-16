import OwnerProfile from "../../components/LandingShop/OwnerProfile/OwnerProfile";
import FruitShop from "../../assets/img/LaGallega.webp";
import BusinessMap from "./BusinessMap/BusinessMap";
import Map from "../../components/Map";
import { useState, useEffect } from "react";
import ContactShop from "./ContactShop/ContactShop";
import ShopPresentation from "../../components/LandingShop/ShopPresentation/ShopPresentation";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { store as storeA } from "../../App";

function LandingShop({}) {
  let storeId = useParams().id;
  const [store, setStore] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const result = await axios.get(`http://localhost:3003/store/${storeId}`);
    console.log("Indi");
    result.data.store.store_name = "La Gallega";

    setStore(result.data.store);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const [mapModal, setMapModal] = useState(false);
  const lng = 40.37;
  const lat = -3.74;
  console.log(lng, "lng");
  const coordinates = [lat, lng];

  if (!isLoading)
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
              <Map mapType="features" features={[{ coordinates }]} />
            </div>
          ) : null}
        </div>
      </>
    );
}
export default LandingShop;
