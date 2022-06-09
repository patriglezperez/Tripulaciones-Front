import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import LandPage from "./components/landpage/LandPage";
import NavBar from "./components/navbar/NavBar";

function App() {
  const error = "Page not found";
  const error404 = "Error 404";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/register" element={<RegisterForm />} />

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
