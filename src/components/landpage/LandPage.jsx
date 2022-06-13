import { useAuth } from "../../context/authContext";
import NavBar from "../navbar/NavBar";
import ResumenUser from "./resumenUser";
import ResumenCard from "./resumenUser/ResumenCard";

const LandPage = () => {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();

  return (
    <div className="landpage container">
      <ResumenUser />
      <button className="primary-button" onClick={() => signout()}>
        cerrar sesion
      </button>
    </div>
  );
};
export default LandPage;
