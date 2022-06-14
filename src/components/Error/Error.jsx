import { useNavigate } from "react-router-dom";

function Error(props) {
  const error = props.error;
  const navigate = useNavigate();

  return (
    <div className="error--component">
      <p className="error--detail">{error}</p>

      <button
        class="error--btn"
        className="error--btn"
        onClick={() => {
          navigate("/");
        }}
      >
        <span className="error--btn--textOne">Volver a inicio</span>
        <span className="error--btn--textTwo">Estupendo!</span>
      </button>
    </div>
  );
}
export default Error;
