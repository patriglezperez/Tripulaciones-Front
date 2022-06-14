import axios from "axios";
const postOrder = async (order) =>
  axios.post(`http://localhost:3003/orders/new`, order);
export default postOrder;
