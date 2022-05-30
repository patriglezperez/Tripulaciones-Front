import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import LandingShop from "./components/LandingShop/LandingShop";

function App() {
  const error = "Page not found";
  const error404 = "Error 404";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<LandingShop />} />
          <Route
            path="*"
            element={<Error error={error} error404={error404} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
