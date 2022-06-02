import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";

function App() {
  const error = "404 Page not found";

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
