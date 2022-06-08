import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

function ContactShop() {
  let store = {
    store_phone_number: "666666666",
    store_email: "hola@gmail.com",
  };

  return (
    <div className="contactShop--container">
      <div className="contactShop--elements">
        <div>
          <PhoneIphoneIcon fontSize="large" />
          <p>{store.store_phone_number}</p>
        </div>
        <div>
          <EmailIcon fontSize="large" />
          <p>{store.store_email}</p>
        </div>
      </div>
    </div>
  );
}
export default ContactShop;
