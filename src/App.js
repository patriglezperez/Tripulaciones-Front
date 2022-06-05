import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";
import LandingShop from "./components/LandingShop/LandingShop";

function App() {
  const error = "404 Page not found";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<LandingShop />} />
          <Route path="*" element={<Error error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
