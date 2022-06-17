import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import BusinessManagment from "./components/BusinessManagment";
import ConfirmedOrder from "./components/ConfirmedOrder";
import RegisterBusinessForm from "./components/forms/RegisterBusinessForm";
import LandingShop from "./components/LandingShop/LandingShop";
import LandPage from "./components/landpage/LandPage";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login";
import Shops from "./components/Shops/shops";
import Ecommerce from "./components/Ecommerce";
import BusinessPersonalProfile from "./components/BusinessPersonalProfile/BusinessPersonalProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/utils/theme/themeConfig";
import Prueba from "./assets/img/tienda.webp";
import axios from "axios";

function App() {
  const error = "Error 404. Página no encontrada";
  const [store, setStore] = useState([]);

  const fetchData = async () => {
    const result = await axios.get("http://localhost:3003/store/all");
    const data = result.data.allStore;
    data.unshift(
      result.data.allStore.filter(
        (e) => e.uuid_store === "0b7f8622-f0e5-4845-b2c5-c0e3f974a666"
      )[0]
    );
    console.log(data);
    setStore(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/*Login/register*/}
            <Route path="/" element={<LandPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/register-user" element={<RegisterForm />} />
            <Route
              path="/register-business"
              element={<RegisterBusinessForm />}
            />
            {/*Client*/}
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/confirmed-order" element={<ConfirmedOrder />} />

            {/*Business*/}
            <Route path="/business-managment" element={<BusinessManagment />} />
            <Route path="/business/:type" element={<Shops />} />
            <Route path="/business/all" element={<Shops items={store} />} />

            <Route path="/business/type/:id" element={<LandingShop />} />
            <Route
              path="/business/profile"
              element={<BusinessPersonalProfile />}
            />

            <Route path="*" element={<Error error={error} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
export default Sentry.withProfiler(App);
