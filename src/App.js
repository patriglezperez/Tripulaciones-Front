import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/forms/RegisterForm";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
