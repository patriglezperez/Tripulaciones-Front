import axios from "axios";
const postClient = async (client) =>
  axios.post(`http://localhost:3003/client/new`, client);
export default postClient;
