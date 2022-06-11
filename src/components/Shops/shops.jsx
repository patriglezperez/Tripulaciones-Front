import Prueba from "../../assets/img/tienda.webp";
import StarIcon from "@mui/icons-material/Star";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

const typeProduct = [
  {
    name: "Frutería",
    id: 1,
  },
  {
    name: "Pescadería",
    id: 2,
  },
  {
    name: "Meloinvento",
    id: 3,
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
];

function Shops() {
  const navigate = useNavigate();
  const id = store.uuid_store;

  ///Go to the top
  //Get the button:
  const mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  ///

  return (
    <div>
      <ArrowBackIosIcon
        fontSize="large"
        className="shop--arrow--back"
        color="primary"
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="shop--container">
        <h2 className="shop--type">{typeProduct[1].name}</h2>

        {store.map((shop) => (
          <div
            className="shop"
            key={shop.id}
            onClick={() => navigate(`/business/${id}`, { state: { id: id } })}
          >
            <div>
              <img className="shop--image" alt="images" src={shop.img} />
            </div>
            <div className="shop--details">
              <p>
                <b>{shop.name}</b>
              </p>
              <div class="shop--valoration">
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

        {/* Go to top button */}
        <button className="myBtn" onClick={topFunction}>
          <div class="text">
            <span>Ir</span>
            <span>al</span>
            <span>principio</span>
          </div>
          <div class="clone">
            <span>Ir</span>
            <span>al</span>
            <span>principio</span>
          </div>
          <svg
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Shops;
