function ShopPresentation({store}) {
 
  
  return (
    <div className="shopPresentation--container">
      <div className="shopPresentation--description">
        <h2>{store.store_name}</h2>
        <br />
        <hr className="wave" />
        <br />
        <p>{store.description_store}</p>
      </div>
    </div>
  );
}
export default ShopPresentation;
