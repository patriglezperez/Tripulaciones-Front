function ShopPresentation() {
  let individualShop = {
    OwnerName: "Ana María",
    OwnerDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    LocalName: "Frutas y verduras",
    LocalPresentation:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return (
    <div className="shopPresentation--container">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/v8s8zL9_f-w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <div className="shopPresentation--description">
        <h1>{individualShop.OwnerName} es dueña de...</h1>
        <h2>{individualShop.LocalName}</h2>
        <p>{individualShop.OwnerDescription}</p>
      </div>
    </div>
  );
}
export default ShopPresentation;
