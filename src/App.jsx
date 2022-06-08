import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import * as Sentry from "@sentry/react";
import Error from "./components/Error/Error";
import Login from './components/Login';
import RegisterBusinessForm from "./components/forms/RegisterBusinessForm";
import RegisterForm from "./components/forms/RegisterForm";
function App() {
  const error = "Page not found";
  const error404 = "Error 404";
  const places = [{coordinates:[-0.1275,51.5072], name:"London"}];
  const [marker,setMarker] = useState(null);
  console.log(marker);
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
        <Route path="/register-user" element={<RegisterForm />} />
          <Route
            path="/*"
            element={<Error error={error} error404={error404} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register-business" element={<RegisterBusinessForm />} />
        </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}
export default Sentry.withProfiler(App);
