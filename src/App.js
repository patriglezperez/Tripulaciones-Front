import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import NavBar from "./components/NavBar/Navbar";
function App() {
  const error = "Page not found";
  const error404 = "Error 404";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<RegisterForm />} />
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
