import { useAuth } from "../../context/authContext";
import NavBar from "../NavBar/NavBar";
import ResumenUser from "./resumenUser";
import ResumenCard from "./resumenUser/ResumenCard";
import iconBread from "../../assets/img/iconBread.svg";
import iconFish from "../../assets/img/iconFish.svg";
import iconMeat from "../../assets/img/iconMeat.svg";
import iconFruit from "../../assets/img/iconFruit.svg";
import FeaturedStores from "./featured/FeaturedStores";
import { useNavigate } from "react-router-dom";

const typeProduct = [
  {
    name: "Pescadería",
    id: 9,
  },
  {
    name: "Panadería",
    id: 8,
  },
  {
    name: "Alimentación",
    id: 7,
  },
  {
    name: "Otros",
    id: 25,
  },
];

const LandPage = () => {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();

  const navigate = useNavigate();
  let type = "";
  let id = "";

  return (
    <>
      <div className="landpage container">
        <ResumenUser />
        <div className="category">
          <h2>categorias</h2>
          <div className="category-container">
            <button className="button-category">
              <img
                src={iconFish}
                alt="category"
                onClick={() => {
                  type = typeProduct[0].name;
                  id = typeProduct[0].id;
                  navigate(`/business/${type}`, {
                    state: { type: type, id: id },
                  });
                }}
              />
              pescaderia
            </button>
            <button className="button-category">
              <img
                src={iconBread}
                alt="category"
                onClick={() => {
                  type = typeProduct[1].name;
                  id = typeProduct[1].id;
                  navigate(`/business/${type}`, {
                    state: { type: type, id: id },
                  });
                }}
              />
              panaderia
            </button>
            <button className="button-category">
              <img
                src={iconMeat}
                alt="category"
                onClick={() => {
                  type = typeProduct[2].name;
                  id = typeProduct[2].id;
                  navigate(`/business/${type}`, {
                    state: { type: type, id: id },
                  });
                }}
              />
              panaderia
            </button>
            <button className="button-category">
              <img
                src={iconFruit}
                alt="category"
                onClick={() => {
                  type = typeProduct[3].name;
                  id = typeProduct[3].id;
                  navigate(`/business/${type}`, {
                    state: { type: type, id: id },
                  });
                }}
              ></img>
              otros
            </button>
          </div>
        </div>
        <FeaturedStores />
        <button className="primary-button" onClick={() => signout()}>
          cerrar sesion
        </button>
      </div>
    </>
  );
};
export default LandPage;
