import RegisterForm from "./components/forms/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import * as Sentry from "@sentry/react";
import BusinessManagment from "./components/BusinessManagment";
import ConfirmedOrder from "./components/ConfirmedOrder";
import RegisterBusinessForm from "./components/forms/RegisterBusinessForm";
import LandingShop from "./components/LandingShop/LandingShop";
import LandPage from "./components/landpage/LandPage";
import NavBar from "./components/navbar/NavBar";
import Login from "./components/Login";
import Shops from "./components/Shops/shops";
import Ecommerce from "./components/Ecommerce";
import BusinessPersonalProfile from "./components/BusinessPersonalProfile/BusinessPersonalProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/utils/theme/themeConfig";
import Prueba from "./assets/img/tienda.webp";
export const store = [
  {
    "uuid_store": "7985fff7-8168-4889-8362-bea18c3cfade",
    "owner_sore": "",
    "owner_name": "Pía",
    "owner_last_name": "Viana",
    "store_name": "CARNICERIA CHARCUTERIA POLLERIA PANADERIA",
    "latitude_coordinates": 40.22,
    "longitude_coordinates": -3.74,
    "description_store": "COMERCIO AL POR MENOR DE CARNICERIA",
    "image_store": "",
    "store_phone_number": "+34 625419888",
    "store_email": "Pía_Viana@ortega.com",
    "store_address": "CALLE FRAGATA,27",
    "company_inscription": "A12989009",
    "premium": "False",
    "product_type": "C",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "9368681d-bbb5-4bd8-b9e9-b511f9749a18",
    "owner_sore": "",
    "owner_name": "Estela",
    "owner_last_name": "Tur",
    "store_name": "LA CHURRERIA DE MIGUEL",
    "latitude_coordinates": 40.12,
    "longitude_coordinates": -3.54,
    "description_store": "COMERCIO AL POR MENOR DE MASAS Y PATATAS FRITAS, CHURRERIA CON OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 621518037",
    "store_email": "Estela_Tur@alsina.com",
    "store_address": "CALLE OCA,100",
    "company_inscription": "A45434606",
    "premium": "True",
    "product_type": "R",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "ae291ed4-d1a3-4b98-905b-4a0f230c6b4f",
    "owner_sore": "",
    "owner_name": "Pastora",
    "owner_last_name": "Gargallo",
    "store_name": "80 S COFFEE",
    "latitude_coordinates": 40.42,
    "longitude_coordinates": -3.84,
    "description_store": "COMERCIO AL POR MENOR DE PAN Y PRODUCTOS DE PANADERIA Y BOLLERIA CON OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 626417803",
    "store_email": "Pastora_Gargallo@noriega.com",
    "store_address": "CALLE CAMINO VIEJO DE LEGANES,111",
    "company_inscription": "A19932172",
    "premium": "False",
    "product_type": "R",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "0e10528d-6a29-40ec-b2eb-a4757a21fe0e",
    "owner_sore": "",
    "owner_name": "Benigna",
    "owner_last_name": "Tena",
    "store_name": "GROSELLA HORNO DE PAN PASTELERIA",
    "latitude_coordinates": 40.42,
    "longitude_coordinates": -3.44,
    "description_store": "COMERCIO AL POR MENOR DE PAN Y PRODUCTOS DE PANADERIA Y BOLLERIA CON OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 627716524",
    "store_email": "Benigna_Tena@gimeno-rosales.es",
    "store_address": "AVENIDA CARABANCHEL ALTO,2",
    "company_inscription": "A20760548",
    "premium": "False",
    "product_type": "R",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "f046a0f3-2fd7-4199-9a51-5a63ef054450",
    "owner_sore": "",
    "owner_name": "Diana",
    "owner_last_name": "Barrena",
    "store_name": "PASTELERIA CAFETERIA",
    "latitude_coordinates": 40.42,
    "longitude_coordinates": -3.66,
    "description_store": "COMERCIO AL POR MENOR DE  PASTELERIA, CONFITERIA, REPOSTERIA CON OBRADOR-SIN BARRA DEGUSTACION",
    "image_store": "",
    "store_phone_number": "+34 621463123",
    "store_email": "Diana_Barrena@juan.es",
    "store_address": "CALLE NUESTRA SEÑORA DE LA LUZ,22",
    "company_inscription": "A35059322",
    "premium": "True",
    "product_type": "R",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "dc1b9c6e-75e1-493d-88d3-e5f8649b8c54",
    "owner_sore": "",
    "owner_name": "Candela",
    "owner_last_name": "Barco",
    "store_name": "OBRADOR LATINO",
    "latitude_coordinates": 40.12,
    "longitude_coordinates": -3.34,
    "description_store": "COMERCIO AL POR MENOR DE PAN Y PRODUCTOS DE PANADERIA Y BOLLERIA CON OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 622836248",
    "store_email": "Candela_Barco@sastre-pons.com",
    "store_address": "CALLE EL ESPINAR,14",
    "company_inscription": "A72855879",
    "premium": "True",
    "product_type": "R",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "e55b676c-9a73-428e-bf65-dc151220e4d6",
    "owner_sore": "",
    "owner_name": "Eligio",
    "owner_last_name": "Zabaleta",
    "store_name": "POLLERIA MAMEL",
    "latitude_coordinates": 40.62,
    "longitude_coordinates": -3.14,
    "description_store": "COMERCIO AL POR MENOR DE AVES, HUEVOS Y CAZA SIN OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 620903493",
    "store_email": "Eligio_Zabaleta@salvador.es",
    "store_address": "AVENIDA NUESTRA SEÑORA DE FATIMA,19",
    "company_inscription": "A40759345",
    "premium": "False",
    "product_type": "C",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "9b170858-4b30-46ae-898d-8993c452960c",
    "owner_sore": "",
    "owner_name": "Édgar",
    "owner_last_name": "Oliver",
    "store_name": "PESCADERIA",
    "latitude_coordinates": 39.98,
    "longitude_coordinates": -3.99,
    "description_store": "COMERCIO AL POR MENOR DE PESCADOS Y MARISCOS SIN OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 628733461",
    "store_email": "Édgar_Oliver@pelaez-cervantes.es",
    "store_address": "CALLE CAMINO VIEJO DE LEGANES,177",
    "company_inscription": "A26482856",
    "premium": "False",
    "product_type": "P",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "9e0b00c4-51d8-4eae-b5e5-8f2df0f1dc0d",
    "owner_sore": "",
    "owner_name": "Jerónimo",
    "owner_last_name": "Segura",
    "store_name": "PESCADERIA",
    "latitude_coordinates": 40.15,
    "longitude_coordinates": -3.80,
    "description_store": "COMERCIO AL POR MENOR DE PESCADOS Y MARISCOS SIN OBRADOR",
    "image_store": "",
    "store_phone_number": "+34 623112078",
    "store_email": "Jerónimo_Segura@herrero.net",
    "store_address": "CALLE ANTONIO LOPEZ,6",
    "company_inscription": "A74370461",
    "premium": "True",
    "product_type": "P",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
  {
    "uuid_store": "ff2614b5-5882-4836-a000-80e072729ff1",
    "owner_sore": "",
    "owner_name": "Febe",
    "owner_last_name": "Galiano",
    "store_name": "CARNICERIA POLLERIA",
    "latitude_coordinates": 42.03,
    "longitude_coordinates": -3.70,
    "description_store": "COMERCIO AL POR MENOR DE CARNICERIA",
    "image_store": "",
    "store_phone_number": "+34 621949085",
    "store_email": "Febe_Galiano@pastor-gimeno.com",
    "store_address": "CALLE FRAGATA,7",
    "company_inscription": "A08632070",
    "premium": "False",
    "product_type": "C",
    "modification_date": "2022-06-06",
    "discharge_date": "2022-06-06",
    "rating": 4,
    "img": Prueba
  },
];
function App() {
  const error = "Error 404. Página no encontrada";
  
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            {/*Login/register*/}
            <Route path="/" element={<LandPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/register-user" element={<RegisterForm />} />
            <Route
              path="/register-business"
              element={<RegisterBusinessForm />}
            />
            {/*Client*/}
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/confirmed-order" element={<ConfirmedOrder />} />

            {/*Business*/}
            <Route path="/business-managment" element={<BusinessManagment />} />
            <Route path="/business/:type" element={<Shops />} />
            <Route path="/business/all" element={<Shops items={store}/>} />

            <Route path="/business/type/:id" element={<LandingShop />} />
            <Route
              path="/business/profile"
              element={<BusinessPersonalProfile />}
            />

            <Route path="*" element={<Error error={error} />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
export default Sentry.withProfiler(App);
