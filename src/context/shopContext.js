import { createContext, useContext, useEffect, useState } from "react";

const shopContext = createContext();
export const useShop = () => useContext(shopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //Check if we have a cart stored in localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    console.log(storedCart);
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
    }
  }, []);

  //Update the cart in localStorage
  useEffect(() => {
    if (cart?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  //Add an item to the cart
  const addToCart = (item) => {
    //if the item is already in the cart, increase the quantity
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (isInCart) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.quantity += 1;
          }
          return cartItem;
        }),
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  //Remove an item from the cart
  const removeFromCart = (item) => {
    //If the item is in the cart, widthraw 1 from the quantity
    const isInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (isInCart) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            cartItem.quantity -= 1;
          }
          return cartItem;
        }),
      );
    } else {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };
  //Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <shopContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </shopContext.Provider>
  );
};
