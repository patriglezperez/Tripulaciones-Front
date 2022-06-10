import React from "react";

const user = {
  name: "paco",
  lastName: "martinez",
  point: 200,
};
// const hola = 32;
// export { hola };
const ResumenCard = () => {
  return (
    <div className="resumen-card-container container">
      <h2>
        {user.name} {user.lastName}
      </h2>
      <div class="circular">
        <div class="inner"></div>
        <div class="number">100%</div>
        <div class="circle">
          <div class="bar left">
            <div class="progress"></div>
          </div>
          <div class="bar right">
            <div class="progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumenCard;
