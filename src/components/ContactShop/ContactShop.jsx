import Phone from "../../assets/img/phone.png";
import Email from "../../assets/img/mail.png";
function ContactShop() {
  let store = {
    store_phone_number: "666666666",
    store_email: "hola@gmail.com",
  };

  return (
    <div className="contactShop--container">
      <div className="contactShop--elements">
        <div className="contactShop--ind">
          <img src={Phone} alt="phone" />
          <p>{store.store_phone_number}</p>
        </div>
        <div className="contactShop--ind">
          <img src={Email} alt="phone" />
          <p>{store.store_email}</p>
        </div>
      </div>
    </div>
  );
}
export default ContactShop;
