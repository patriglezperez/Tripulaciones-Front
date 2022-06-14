import Owner from "../../../assets/img/Woman.jpg";

function OwnerProfile() {
  let store = {
    image_owner: Owner,
    owner_name: "Ana María",
    description_store:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
  };

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
            <p>{store.description_store}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OwnerProfile;
