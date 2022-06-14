import React from "react";

import Prueba1 from "../../../assets/img/testimg/alice-gu-B3oUcVk9IF0-unsplash.jpg";
import Prueba2 from "../../../assets/img/testimg/inigo-de-la-maza-X3rpDEEFjmQ-unsplash.jpg";
import Prueba3 from "../../../assets/img/testimg/victoriano-izquierdo-CQxN5GSpWQY-unsplash.jpg";
import Prueba4 from "../../../assets/img/testimg/nick-karvounis-xrDL8xOgeJQ-unsplash.jpg";
const store = [
  {
    name: "La tienda de siempre",
    location: "Avda. Mediterráneo",
    id: 1,
    img: Prueba4,
  },
  {
    name: "Frutería Paco",
    location: "Avda. Recoletos",
    id: 2,
    img: Prueba1,
  },
  {
    name: "El mercado de Antonio",
    location: "Calle Delicias",
    id: 3,
    img: Prueba2,
  },
  {
    name: "La tienda de siempre",
    location: "Avda. Mediterráneo",
    id: 1,
    img: Prueba3,
  },
  {
    name: "Frutería Paco",
    location: "Avda. Recoletos",
    id: 2,
    img: Prueba4,
  },
  {
    name: "El mercado de Antonio",
    location: "Calle Delicias",
    id: 3,
    img: Prueba2,
  },
];
const FeaturedStores = () => {
  return (
    <div className="featured">
      <h2>descatados</h2>
      <div className="featured-container">
        {store.map((shop, key) => {
          if (key < 4) {
            return (
              <div className={`shop p${key}`} key={key}>
                <img className="shop--image" alt="images" src={shop.img} />

                <div className="shop--details">
                  <p>{shop.name}</p>
                  <div class="shop--valoration"></div>
                </div>
              </div>
            );
          }

          return;
        })}
      </div>
    </div>
  );
};

export default FeaturedStores;
