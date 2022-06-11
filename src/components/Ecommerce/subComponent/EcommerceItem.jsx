import { useState, useEffect } from "react";
import { set } from "react-hook-form";

import { useShop } from "../../../context/shopContext";

export default function EcommerceItem({ item }) {
  const { addToCart, removeFromCart, cart } = useShop();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    //check if item is in cart and set quantity
    if (cart.length > 0) {
      cart.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          setQuantity(cartItem.quantity);
        }
      });
    } else {
      setQuantity(0);
    }
  }, [cart]);
  return (
    <div className="ecommerce-item">
      <div className="ecommerce-item-image">
        <img src={item.image} alt="item" />
      </div>
      <div className="ecommerce-item-description">
        <div className="ecommerce-item-name">{item.name}</div>
        <div className="ecommerce-item-price">{item.price}€</div>
        <div className="ecommerce-item-add-button">
          {quantity > 0 && (
            <>
              <button onClick={() => removeFromCart(item)}>-</button>
              <div className="ecommerce-item-quantity">{quantity}</div>
            </>
          )}
          <button onClick={() => addToCart(item)}>
            {quantity > 0 ? "+" : "Añadir"}
          </button>
        </div>
      </div>
    </div>
  );
}
