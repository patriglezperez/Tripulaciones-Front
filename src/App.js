import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./components/Error/Error";

function App() {
<<<<<<< HEAD
  const error = "404 Page not found";
=======
  const error = "Page not found";
  const error404 = "Error 404";
>>>>>>> a84f51bfc3196e9c36af03440875fb9f1c508696

  return (
    <div>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="*" element={<Error error={error} />} />
=======
          <Route
            path="*"
            element={<Error error={error} error404={error404} />}
          />
>>>>>>> a84f51bfc3196e9c36af03440875fb9f1c508696
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
