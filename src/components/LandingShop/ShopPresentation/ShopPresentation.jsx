function ShopPresentation({ store }) {
  return (
    <div className="shopPresentation--container">
      <div className="shopPresentation--description">
        <h2>{store.store_name}</h2>
        <br />
        <hr className="wave" />
        <br />
        <p>
          El negocio ofrece una gran variedad de productos frescos y de alta
          calidad a sus clientes. Los empleados son amables y serviciales y
          siempre están dispuestos a ayudar. La tienda tiene un ambiente
          agradable y limpio, y los precios son muy razonables.
        </p>
      </div>
    </div>
  );
}
export default ShopPresentation;
