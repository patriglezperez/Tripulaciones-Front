import React from "react";
import EcommerceItem from "./subComponent/EcommerceItem";

export default function Ecommerce(items) {
  const mockedShopItems = [
    {
      id: 1,
      name: "Item 1",
      price: "10",
      description: "Item 1 description",
      image: "https://picsum.photos/200/300",
    },
    {
        id: 2,
        name: "Item 2",
        price: "20",
        description: "Item 2 description",
        image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div className="ecommerce-container">
      {mockedShopItems.map((item) => (
        <EcommerceItem key={`item${item.id}`} item={item} />
      ))}
    </div>
  );
}
