import axios from "axios";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE4ZDZhZTM0MDhmODIwMGMzMmUzMDAiLCJlbWFpbCI6InN1c2hhbnRiYWhpcmF0MDAyQGdtYWlsLmNvbSIsImlhdCI6MTY0NTk2NjAwOSwiZXhwIjoxNjQ1OTY2OTA5fQ.ehFQxaZRY9JqplFbuMjLtKyM8IB1C4yJPBzt6farR6k";

const axiosInstance = axios.create({
	baseURL: "http://localhost:3001/api/v1",
	headers: {
		Authorization: `Bearer ${token}`,
	},
});
export default axiosInstance;
