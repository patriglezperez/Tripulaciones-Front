
import StarIcon from "@mui/icons-material/Star";
import { useLocation, useNavigate } from "react-router-dom";
import iconBack from "../../assets/img/iconBack.svg";
import Rating from '@mui/material/Rating';

function Shops({items}) {
  
  const navigate = useNavigate();

  const location = useLocation().state;
  const store = items;
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }



  return (
    <div className="container-business container">
      <img onClick={() => navigate("/")} src={iconBack} alt="back" />
      <div className="shops">
        <h1>Negocios</h1>
        <div className="shops--container">
          {store.map((shop) => (
            <div
              className="shop"
              key={shop.uuid_store}
              onClick={() =>navigate(`/business/type/${shop.uuid_store}`, { state: shop})}
            >
              
              <img className="shop--image" alt="images" src={shop.img} />

              <div className="shop--details">
                <p>{shop.store_name}</p>
                <div className="shop--valoration">
                <Rating name="half-rating-read" defaultValue={shop.rating} precision={0.5} readOnly/> 
                
                </div>
               
              </div>
            </div>
          ))}
        </div>

        {/* Go to top button */}
        <button className="myBtn" onClick={topFunction}>
          <div className="text">
            <span>Ir</span>
            <span>al</span>
            <span>principio</span>
          </div>
          <div className="clone">
            <span>Ir</span>
            <span>al</span>
            <span>principio</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Shops;
