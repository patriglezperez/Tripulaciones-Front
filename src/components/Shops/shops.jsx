import Prueba from "../../assets/img/tienda.webp";
import StarIcon from "@mui/icons-material/Star";
function Shops() {
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
  const dataShops = [
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

  return (
    <div>
      <p>Back</p>
      <div className="shop--container">
        <h2>{typeProduct[1].name}</h2>
        {dataShops.map((shop) => (
          <div className="shop" key={shop.id}>
            <div>
              <img className="shop--image" alt="images" src={shop.img} />
            </div>
            <div className="shop--details">
              <p>{shop.name}</p>
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
      </div>
    </div>
  );
}
export default Shops;
