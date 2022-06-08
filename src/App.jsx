import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import BusinessManagment from "./components/BusinessManagment";
import ConfirmedOrder from "./components/ConfirmedOrder";
import RegisterBusinessForm from "./components/forms/RegisterBusinessForm";
import LandingShop from "./components/LandingShop/LandingShop";
function App() {
  const error = "Page not found";
  const error404 = "Error 404";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register-user" element={<RegisterForm />} />
          <Route path="/shop" element={<LandingShop />} />
          <Route path="/business-managment" element={<BusinessManagment />} />
          <Route path="/confirmed-order" element={<ConfirmedOrder />} />
          <Route path="/register-business" element={<RegisterBusinessForm />} />
          <Route
            path="*"
            element={<Error error={error} error404={error404} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Sentry.withProfiler(App);
