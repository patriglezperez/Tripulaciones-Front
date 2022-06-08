function ShopPresentation() {
  let store = {
    owner_name: "Ana María",
    store_name: "Frutas y verduras",
    description_store:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return (
    <div className="shopPresentation--container">
      <div className="shopPresentation--description">
        <h2>{store.store_name}</h2>
        <p>{store.description_store}</p>
      </div>
    </div>
  );
}
export default ShopPresentation;
