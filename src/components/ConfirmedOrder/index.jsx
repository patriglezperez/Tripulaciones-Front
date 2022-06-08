import React from "react";

export default function ConfirmedOrder() {
  const items = [
    { name: "item1", qty: 4 },
    { name: "item2", qty: 2 },
    { name: "item3", qty: 1 },
  ];
  return (
    <div className="confirmed-order-container">
      <h2>Su compra</h2>
      <div className="confirmed-order-content">
        {items.map((item, index) => (
          <div key={index} className="confirmed-order-item">
            <div className="confirmed-order-item-name">{item.name}</div>
            <div className="confirmed-order-item-qty">{item.qty}</div>
          </div>
        ))}
      </div>
      <div className="confirmed-order-points">
          Con esta compra has generado <span>10 puntos</span>
          <br />
          Descubre en que puedes invertirlos <a>Aqui</a>
      </div>
    </div>
  );
}
