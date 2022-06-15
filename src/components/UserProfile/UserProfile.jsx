import UserImage from "../../assets/img/userImage.jpg";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState,useEffect } from "react";
import OrderDetails from "./OrderDetails/OrderDetails";
import ResumenUser from "../landpage/resumenUser";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const client = {
  uuid_client: 0,
  client_name: "Laura",
  client_last_name: "González",
  client_email: "example@gmail.com",
  green_dots: 8,
  modification_date: "10 de Mayo",
  discharge_date: "14.02.2022",
  orders: [
    {
      order_date: "12/05/2022",
      store_name: "Frutas y verduras",
      id: 1,
    },
    {
      order_date: "18/05/2022",
      store_name: "La tienda de Paco",
      id: 2,
    },
    {
      order_date: "25/05/2022",
      store_name: "La rienda de mi prima",
      id: 3,
    },
  ],
};

function UserProfile() {
  const [name, setName] = useState(client.client_name);
  const [lastName, setLastName] = useState(client.client_last_name);
  const [isEditable, setIsEditable] = useState(false);
  const navigate = useNavigate();
  const {user, signout} = useAuth();
  //If the user is logged in, the user profile is shown else redirect to login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }
  , [user]);
  //   Switch to editable mode or not
  function handleChange() {
    setIsEditable(!isEditable);
  }

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
  console.log(user)
  if(user)return (
    <div className="UserProfile--container container">
      <div className="userProfile--data">
        <div className="userProfile--top">
          <img src={user.photoURL} alt="user" className="userProfile--img" />
          <p className="userProfile--email">{user.email}</p>
        </div>

        {/* User info */}
        {isEditable === true ? (
          <div className="userProfile--user--info">
            <div className="userProfile--btn">
              <h3>INFORMACIÓN PERSONAL</h3>
              <CheckIcon
                fontSize="small"
                onClick={handleChange}
                className="userProfile--icon"
                color="primary"
              />
            </div>

            {/* <div className="userProfile--editable">
              <p className="userProfile--titles">Nombre:</p>
              <input
                type={"text"}
                className="input"
                value={name}
                onChange={NameChange}
              />
            </div>
            <div className="userProfile--editable">
              <p className="userProfile--titles">Apellido:</p>
              <input
                type={"text"}
                className="input"
                onChange={LastNameChange}
                value={lastName}
              />
            </div>
            <div className="userProfile--editable">
              <p className="userProfile--titles">Fecha de alta:</p>
              <p>{client.discharge_date}</p>
            </div> */}
          </div>
        ) : (
          <div className="userProfile--user--info">
           
            {/* <div className="userProfile--editable">
              <p className="userProfile--titles">Nombre:</p>
              <p className="userProfile--name">{name}</p>
            </div>

            <div className="userProfile--editable">
              <p className="userProfile--titles">Apellido:</p>
              <p className="userProfile--lastName">{lastName}</p>
            </div>
            <div className="userProfile--editable">
              <p className="userProfile--titles">Fecha de alta:</p>
              <p>{client.discharge_date}</p>
            </div> */}
          </div>
        )}

        {/* Green Points */}
        <ResumenUser />

        <button
                
                onClick={handleChange}
                className="primary-button edit-button"
              
              >Editar datos</button>

        {/* Orders */}
        <div className="userProfile--user--info">
          <h3 className="userProfile--space">MIS COMPRAS</h3>
          <div className="userProfile--orders">
            {client.orders === 0 ? (
              <OrderDetails />
            ) : (
              client.orders.map((order) => (
                <OrderDetails
                  key={`order${order.id}`}
                  orderName={order.store_name}
                  orderDate={order.order_date}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <button className="secondary-button logout-button" onClick={() => signout()}>
          cerrar sesion
        </button>
    </div>
  );
}
export default UserProfile;
