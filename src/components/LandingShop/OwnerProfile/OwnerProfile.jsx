import Owner from "../../../assets/img/Woman.jpg";

function OwnerProfile({store}) {

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
            <p>Conoce mas sobre {store.store_name}
            </p>
            <p>El negocio es regentado por {store.owner_name}</p>

          </div>
        </div>
      </div>
    </div>
  );
}
export default OwnerProfile;
