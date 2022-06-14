import Prueba from "../../assets/img/tienda.webp";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import iconBack from "../../assets/img/iconBack.svg";

const typeProduct = [
  {
    name: "Frutería",
    id: 9,
  },
  {
    name: "Pescadería",
    id: 8,
  },
  {
    name: "Meloinvento",
    id: 7,
  },
];
const store = [
  {
    name: "La tienda de siempre",
    location: "Avda. Mediterráneo",
    id: 1,
    img: Prueba,
  },
  {
    name: "Frutería Paco",
    location: "Avda. Recoletos",
    id: 2,
    img: Prueba,
  },
  {
    name: "El mercado de Antonio",
    location: "Calle Delicias",
    id: 3,
    img: Prueba,
  },
  {
    name: "La tienda de siempre",
    location: "Avda. Mediterráneo",
    id: 77,
    img: Prueba,
  },
  {
    name: "Frutería Paco",
    location: "Avda. Recoletos",
    id: 66,
    img: Prueba,
  },
  {
    name: "El mercado de Antonio",
    location: "Calle Delicias",
    id: 73,
    img: Prueba,
  },
];

function Shops() {
  const navigate = useNavigate();
  const id = store.uuid_store;

  ///Go to the top

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className="container-business container">
      <img onClick={() => navigate("/")} src={iconBack} alt="back" />
      <div className="shops">
        <h1>{typeProduct[1].name}</h1>
        <div className="shops--container">
          {store.map((shop) => (
            <div
              className="shop"
              key={shop.id}
              onClick={() => navigate(`/business/${id}`, { state: { id: id } })}
            >
              <img className="shop--image" alt="images" src={shop.img} />

              <div className="shop--details">
                <p>{shop.name}</p>
                <div className="shop--valoration">
                  {/* Star 1 */}
                  <button>
                    <StarIcon />
                  </button>

                  {/* Star 2 */}
                  <button>
                    <StarIcon />
                  </button>

                  {/* Star 3 */}
                  <button>
                    <StarIcon />
                  </button>

                  {/* Star 4 */}
                  <button>
                    <StarIcon />
                  </button>

                  {/* Star 5 */}
                  <button>
                    <StarIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Go to top button */}
        <button id="myBtn" className="myBtn" onClick={topFunction}>
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
