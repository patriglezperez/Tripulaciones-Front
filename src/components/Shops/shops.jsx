import Prueba from "../../assets/img/tienda.webp";
function Shops() {
  const dataShops = [
    {
      name: "La tienda de siempre",
      location: "Avda. Mediterráneo",
      distance: "810 m",
      id: 1,
      img: Prueba,
    },
    {
      name: "Frutería Paco",
      location: "Avda. Recoletos",
      distance: "682 m",
      id: 2,
      img: Prueba,
    },
    {
      name: "El mercado de Antonio",
      location: "Calle Delicias",
      distance: "950 m",
      id: 3,
      img: Prueba,
    },
  ];

  return (
    <div className="container-shops">
      {dataShops.map((shop) => (
        <div className="shops" key={shop.id}>
          <div>
            <img className="shops-image" alt="images" src={shop.img} />
          </div>
          <div className="shops-details">
            <p>{shop.name}</p>
            <p>{shop.location}</p>
            <p>{shop.distance}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Shops;
