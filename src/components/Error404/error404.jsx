import { useNavigate } from "react-router-dom";

function Error404() {
  const navigate = useNavigate();
  return (
    <div>
      <p>Error 404</p>
      <p>PAGE NOT FOUND</p>
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
export default Error404;
