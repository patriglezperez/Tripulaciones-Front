import { useAuth } from "../../../context/authContext";
import ProgressCircle from "./progressiveCircle/ProgressCircle";
import iconTree from "../../../assets/img/iconTree.svg";

const userTemplate = {
  point: 250,
};

const ResumenCard = () => {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();
  const tree = userTemplate.point / 100;

  return (
    <div className="resumen-card-container container">
      <div className="info-card">
        <h2>{user.displayName}</h2>
        <div className="container-tree">
          <p>haz sembrado</p>
          <img src={iconTree}></img>
          <span>x {Math.trunc(tree)}</span>
        </div>
      </div>
      <ProgressCircle point={userTemplate.point} pointLap={100} time={400} />
    </div>
  );
};
export default ResumenCard;
