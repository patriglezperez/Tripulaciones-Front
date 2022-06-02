import { useNavigate } from "react-router-dom";

function Error(props) {
  const error = props.error;
  const navigate = useNavigate();

  return (
    <div>
      <p>{error}</p>
      <p
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </p>
    </div>
  );
}
export default Error;
