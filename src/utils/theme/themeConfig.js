import { createTheme } from "@mui/material/styles";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[300],
    },
  },
});
export default theme;
