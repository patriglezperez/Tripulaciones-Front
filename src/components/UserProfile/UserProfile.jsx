import UserImage from "../../assets/img/userImage.jpg";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";

const client = {
  uuid_client: 0,
  client_name: "Laura",
  client_last_name: "González",
  client_email: "example@gmail.com",
  green_dots: 8,
  modification_date: "10 de Mayo",
  discharge_date: "14.02.2022",
};

function UserProfile() {
  const [name, setName] = useState(client.client_name);
  const [lastName, setLastName] = useState(client.client_last_name);
  const [isEditable, setIsEditable] = useState(false);

  //   Switch to editable mode or not
  function handleChange() {
    setIsEditable(!isEditable);
    console.log("isEditable", isEditable);
  }

  //Edit the name
  function NameChange(event) {
    const newName = event.target.value;
    setName(newName);
    console.log("newName", newName);
    console.log("name", name);
  }

  //Edit the last name
  function LastNameChange(event) {
    const newLastName = event.target.value;
    setLastName(newLastName);
    console.log("newLastName", newLastName);
    console.log("lastName", lastName);
  }

  return (
    <div className="UserProfile--container">
      <div className="userProfile--data">
        <div>
          <img src={UserImage} alt="user" className="userProfile--img" />
          <p className="userProfile--email">{client.client_email}</p>
        </div>

        {/* User info */}
        {isEditable === true ? (
          <div className="userProfile--user--info">
            <div className="userProfile--editable">
              <p>Nombre:</p>
              <input
                type={"text"}
                className="userProfile--name"
                value={name}
                onChange={NameChange}
              />
            </div>
            <div className="userProfile--editable">
              <p>Apellido:</p>
              <input
                type={"text"}
                className="userProfile--lastName"
                onChange={LastNameChange}
                value={lastName}
              />
              <CheckIcon
                fontSize="small"
                onClick={handleChange}
                className="userProfile--icon"
              />
            </div>
          </div>
        ) : (
          <div className="userProfile--user--info">
            <div className="userProfile--editable">
              <p>Nombre:</p>
              <p className="userProfile--name">{name}</p>
            </div>

            <div className="userProfile--editable">
              <p>Apellido:</p>
              <p className="userProfile--lastName">{lastName}</p>
              <EditIcon
                fontSize="small"
                onClick={handleChange}
                className="userProfile--icon"
              />
            </div>
          </div>
        )}
      </div>

      {/* Account Information */}

      <div>
        <div className="userProfile--editable">
          <p className="userProfile--lastName">{client.modification_date}</p>
        </div>
        <div className="userProfile--editable">
          <p className="userProfile--email">{client.discharge_date}</p>
        </div>
      </div>

      {/* Green Points */}

      <div className="userProfile--editable">
        <p className="userProfile--name">{client.green_dots}</p>
      </div>
    </div>
  );
}
export default UserProfile;
