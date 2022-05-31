import Owner from "../../assets/img/Woman.jpg";

function OwnerProfile() {
  let individualShop = {
    OwnerName: "Ana María",
    OwnerDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };

  return (
    <div className="ownerProfile--component">
      <p>Acerca de</p>

      <div className="ownerProfile--container">
        <img src={Owner} alt="propietario/a" className="ownerProfile--image" />
        <div className="ownerProfile--description">
          <h2>Soy {individualShop.OwnerName}</h2>
          <p>{individualShop.OwnerDescription}</p>
        </div>
      </div>
    </div>
  );
}
export default OwnerProfile;
