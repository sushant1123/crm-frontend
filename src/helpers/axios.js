import axios from "axios";

const token = sessionStorage.getItem("accessToken");

const axiosInstance = axios.create({
	baseURL: "http://localhost:3001/api/v1",
});
export default axiosInstance;
