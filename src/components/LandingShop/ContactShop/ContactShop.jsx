import MailRoundedIcon from "@mui/icons-material/MailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

function ContactShop({store}) {
  return (
    <div className="contactShop">
      <div className="contactShop--container">
        <div>
          <LocalPhoneRoundedIcon
            className="contactShop--icons"
            color="primary"
            fontSize="large"
          />
          <p>{store.store_phone_number}</p>
        </div>

        <div>
          <MailRoundedIcon
            className="contactShop--icons"
            color="primary"
            fontSize="large"
          />
          <p>{store.store_email}</p>
        </div>

        <div>
          <HomeRoundedIcon
            className="contactShop--icons"
            color="primary"
            fontSize="large"
          />
          <p>{store.store_address}</p>
        </div>
      </div>
    </div>
  );
}
export default ContactShop;
