import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function ContactShop() {
  let store = {
    store_phone_number: "666666666",
    store_email: "hola@gmail.com",
    store_address: "C. Dr. Esquerdo, 110",
  };

  return (
    <div className="contactShop">
      <div className="contactShop--container">
        <div>
          <LocalPhoneRoundedIcon className="contactShop--icons" />
          <p>{store.store_phone_number}</p>
        </div>

        <div>
          <HomeRoundedIcon className="contactShop--icons" />
          <p>{store.store_address}</p>
        </div>

        <div>
          <MailRoundedIcon className="contactShop--icons" />
          <p>{store.store_email}</p>
        </div>
      </div>
    </div>
  );
}
export default ContactShop;
