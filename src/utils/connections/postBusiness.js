import axios from "axios";
const postBusiness = async business => axios.post(`http://localhost:3003/business`,business)
export default postBusiness;