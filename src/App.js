import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test";
import Error404 from "./components/Error404/error404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
