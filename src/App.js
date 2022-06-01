import RegisterForm from "./components/Forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
function App() {
  const error = "Page not found";
  const error404 = "Error 404";

  return (
    <div>
      <BrowserRouter>
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
