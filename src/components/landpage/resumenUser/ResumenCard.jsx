import { useAuth } from "../../../context/authContext";
import ProgressCircle from "./progressiveCircle/ProgressCircle";
import iconTree from "../../../assets/img/iconTree.svg";

const userTemplate = {
  point: 150,
};

const ResumenCard = () => {
  const { login, loginWithGoogle, user, signout, headerToken } = useAuth();
  const time = 400;
  const pointLap = 100;
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
      <ProgressCircle
        point={userTemplate.point}
        pointLap={pointLap}
        time={time}
      />
    </div>
  );
};
export default ResumenCard;
