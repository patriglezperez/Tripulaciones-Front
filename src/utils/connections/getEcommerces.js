import axios from "axios";
const getEcommerces = async () =>
  axios.get(`http://localhost:3003/ecommerce/all`);
export default getEcommerces;
