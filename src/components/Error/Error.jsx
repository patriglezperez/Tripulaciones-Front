import { useNavigate } from "react-router-dom";

function Error({ error, error404 }) {
  console.log(error, "error");
  console.log("error404", error404);
  const navigate = useNavigate();
  return (
    <div>
      <p>{error}</p>
      <p>{error404}</p>
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
