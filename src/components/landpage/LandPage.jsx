import { useAuth } from "../../context/authContext";
import NavBar from "../NavBar/NavBar";
import ResumenUser from "./resumenUser";
import ResumenCard from "./resumenUser/ResumenCard";
import iconBread from "../../assets/img/iconBread.svg";
import iconFish from "../../assets/img/iconFish.svg";
import iconMeat from "../../assets/img/iconMeat.svg";
import iconFruit from "../../assets/img/iconFruit.svg";

const LandPage = () => {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();

  return (
    <div className="landpage container">
      <ResumenUser />
      <div className="category">
        <h2>categorias</h2>
        <div className="category-container">
          <button className="button-category">
            <img src={iconFish}></img>
            pescaderia
          </button>
          <button className="button-category">
            <img src={iconBread}></img>
            panaderia
          </button>
          <button className="button-category">
            <img src={iconMeat}></img>
            panaderia
          </button>
          <button className="button-category">
            <img src={iconFruit}></img>
            panaderia
          </button>
        </div>
      </div>

      <button className="primary-button" onClick={() => signout()}>
        cerrar sesion
      </button>
    </div>
  );
};
export default LandPage;
