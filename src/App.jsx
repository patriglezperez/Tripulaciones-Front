import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Map from './components/Map';
import Error from "./components/Error/Error";
import Login from './components/Login';

function App() {
  const error = "Page not found";
  const error404 = "Error 404";
  const places = [{coordinates:[-0.1275,51.5072], name:"London"}];
  const [marker,setMarker] = useState(null);
  console.log(marker);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/error"
            element={<Error error={error} error404={error404} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
       <div className="map-container-test">
           <Map features={places} mapType="features" />
           {/* <Map setMarker={setMarker} mapType="search" /> */}
       </div>
     
    </div>
  );
}
export default App;
