import Owner from "../../../assets/img/Woman.jpg";

function OwnerProfile({ store }) {
  return (
    <div className="ownerProfile">
      <div className="ownerProfile--component">
        <div className="ownerProfile--container">
          <img src={Owner} alt="propietario/a" className="card" />

          <div className="ownerProfile--description">
            <h2>Conoce a {store.owner_name}</h2>
            <br />
            <hr className="wave" />
            <br />
            <p>
              {store.owner_name} es la propietaria de la Gallega, una tienda de
              comida española en Madrid, España. Ella es originaria de Galicia,
              una región en el noroeste de España, y su tienda se especializa en
              productos de esa región. {store.owner_name}es una persona muy
              amable y servicial, y siempre está feliz de responder a cualquier
              pregunta que sus clientes puedan tener sobre sus productos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OwnerProfile;
