import { useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar() {
  const locationUrl = useLocation().pathname;

  //pages
  const clientView = "/shops";
  const ownerView = "/admin";

  let iconRender;

  if (locationUrl.includes(clientView)) {
    iconRender = (
      <ShoppingCartIcon
        className="shopping-cart"
        sx={{
          color: "#ffffff",
          fontSize: "4rem",
          alignSelf: "flex-end",
          cursor: "pointer",
        }}
      />
    );
  } else if (locationUrl.includes(ownerView)) {
    iconRender = <ShoppingCartIcon />;
  }

  return <header className="navbar">{iconRender}</header>;
}
