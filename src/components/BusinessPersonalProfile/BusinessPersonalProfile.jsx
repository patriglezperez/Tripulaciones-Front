import BusinessImage from "../../assets/img/fruteria.jpg";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

const store = {
  uuid_store: 0,
  image_owner: "ejemplo.jpg",
  owner_name: "Laura",
  owner_last_name: "González",
  owner_description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  store_name: "Frutas y verduras",
  description_store:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  owner_email: "example@gmail.com",
  image_store: "mitienda.jpg",
  store_phone_number: "666666666",
  store_email: "ejemplo@gmail.com",
  store_address: "Avenida de la albufera, 70",
  company_inscription: "78854589",
  premium: "1",
  createdAt: "25/08/2000",
  updatedAt: "25/08/2000",
};

function BusinessPersonalProfile() {
  const [name, setName] = useState(store.owner_name);
  const [lastName, setLastName] = useState(store.owner_last_name);
  const [storeName, setStoreName] = useState(store.store_name);
  const [description, setDescription] = useState(store.description_store);
  const [ownerDescription, setOwnerDescription] = useState(
    store.owner_description
  );
  const [imageStore, setImageStore] = useState(null); //store.image_store
  const [storePhone, setStorePhone] = useState(store.store_phone_number);
  const [storeEmail, setStoreEmail] = useState(store.store_email);
  const [storeAddress, setStoreAddress] = useState(store.store_address);

  const [isEditable, setIsEditable] = useState(false);

  //   Switch to editable mode or not
  function handleChange() {
    setIsEditable(!isEditable);
  }

  //Editable information
  //Edit the name
  function NameChange(event) {
    const newName = event.target.value;
    setName(newName);
  }

  //Edit the last name
  function LastNameChange(event) {
    const newLastName = event.target.value;
    setLastName(newLastName);
  }

  //Edit the name of the business
  function BusinessNameChange(event) {
    const newStoreName = event.target.value;
    setStoreName(newStoreName);
  }

  //Edit the description of the business
  function BusinessDescriptionChange(event) {
    const newDescription = event.target.value;
    setDescription(newDescription);
  }

  //Edit the description of the owner of the business
  function PersonalDescriptionChange(event) {
    const newOwnerDescription = event.target.value;
    setOwnerDescription(newOwnerDescription);
  }

  //Edit the image of the business
  function BusinessImageChange(event) {
    const newImageStore = setImageStore(event.target.files[0]);

    setImageStore(newImageStore);
  }

  //Edit the phone number of the business
  function PhoneChange(event) {
    const newPhoneNumber = event.target.value;
    setStorePhone(newPhoneNumber);
  }

  //Edit the email of the business
  function EmailChange(event) {
    const newEmail = event.target.value;
    setStoreEmail(newEmail);
  }

  //Edit the address of the business
  function AdressChange(event) {
    const newAdress = event.target.value;
    setStoreAddress(newAdress);
  }

  return (
    <div className="businessPersonalProfile--container">
      <div className="businessPersonalProfile--data">
        <div className="businessPersonalProfile--top">
          <img
            src={BusinessImage}
            alt="business"
            className="businessPersonalProfile--img"
            id="myBusinessImage"
          />
          <p className="businessPersonalProfile--email">{store.owner_email}</p>
        </div>

        {/* Business info */}
        {isEditable === true ? (
          <div className="businessPersonalProfile--user--info">
            <div className="businessPersonalProfile--btn">
              <h3>INFORMACIÓN DEL NEGOCIO</h3>
              <CheckIcon
                fontSize="small"
                onClick={handleChange}
                className="businessPersonalProfile--icon"
                color="primary"
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">Nombre:</p>
              <input
                type={"text"}
                className="businessPersonalProfile--name"
                value={name}
                onChange={NameChange}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">Apellido:</p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={LastNameChange}
                value={lastName}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Nombre del negocio:
              </p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={BusinessNameChange}
                value={storeName}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Descripción del negocio:
              </p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={BusinessDescriptionChange}
                value={description}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Descripción del propietario:
              </p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={PersonalDescriptionChange}
                value={ownerDescription}
              />
            </div>
            {/* OJO CAMBIAR LA FOTO */}
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Imagen del negocio:
              </p>
              <input
                type={"file"}
                className="businessPersonalProfile--content"
                onChange={BusinessImageChange}
                value={imageStore}
              />
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Teléfono del negocio:
              </p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={PhoneChange}
                value={storePhone}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Email del negocio:
              </p>
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={EmailChange}
                value={storeEmail}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Dirección del negocio:
              </p>
              {/* OJO CAMBIAR LA DIRECCION */}
              <input
                type={"text"}
                className="businessPersonalProfile--content"
                onChange={AdressChange}
                value={storeAddress}
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">IP del negocio:</p>
              <p>{store.company_inscription}</p>
            </div>
          </div>
        ) : (
          <div className="businessPersonalProfile--user--info">
            <div className="businessPersonalProfile--btn">
              <h3>INFORMACIÓN DEL NEGOCIO</h3>
              <EditIcon
                fontSize="small"
                onClick={handleChange}
                className="businessPersonalProfile--icon"
                color="primary"
              />
            </div>
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">Nombre:</p>
              <p className="businessPersonalProfile--name">{name}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">Apellido:</p>
              <p className="businessPersonalProfile--content">{lastName}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Nombre del negocio:
              </p>
              <p className="businessPersonalProfile--content">{storeName}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Descripción del negocio:
              </p>
              <p className="businessPersonalProfile--content">{description}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Descripción del propietario:
              </p>
              <p className="businessPersonalProfile--content">
                {ownerDescription}
              </p>
            </div>

            {/* OJO Cambiar la foto */}
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Imagen del negocio:
              </p>
              <p className="businessPersonalProfile--content">{imageStore}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Teléfono del negocio:
              </p>
              <p className="businessPersonalProfile--content">{storePhone}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Email del negocio:
              </p>
              <p className="businessPersonalProfile--content">{storeEmail}</p>
            </div>

            {/* OJO Cambiar direccion */}
            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">
                Dirección del negocio:
              </p>
              <p className="businessPersonalProfile--content">{storeAddress}</p>
            </div>

            <div className="businessPersonalProfile--editable">
              <p className="businessPersonalProfile--titles">IP del negocio:</p>
              <p>{store.company_inscription}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default BusinessPersonalProfile;
