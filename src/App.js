import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./components/test";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
