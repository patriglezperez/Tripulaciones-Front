import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

function ContactShop() {
  let individualShop = {
    Address: "Calle de la fresa",
    MobilePhone: "666666666",
    Email: "hola@gmail.com",
  };

  return (
    <div className="contactShop--container">
      <p>Ven a visitarnos</p>

      <div className="contactShop--elements">
        <div>
          <LocationOnIcon fontSize="large" />
          <p>{individualShop.Address}</p>
        </div>
        <div>
          <PhoneIphoneIcon fontSize="large" />
          <p>{individualShop.MobilePhone}</p>
        </div>
        <div>
          <EmailIcon fontSize="large" />
          <p>{individualShop.Email}</p>
        </div>
      </div>
    </div>
  );
}
export default ContactShop;
